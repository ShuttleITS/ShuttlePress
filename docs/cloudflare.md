# Cloudflare Pages 部署

> 适用于 Shuttle 主题构建产物（`index.html` + `assets/`）。使用 Cloudflare Pages 托管，自动提供 CDN 与 SSL。

## 方式一：连接仓库
1. 登录 Cloudflare → Pages → Create a project → 选择仓库。
2. 构建设置：
   - Framework preset：`None`（静态站点）
   - Build command：**留空**（因为你上传的是已构建产物）
   - Build output directory：`dist`
3. 保存并部署，CF 会直接发布已有产物，不会执行构建。
4. 部署完成后在 Pages → Settings 中绑定自定义域名并开启强制 HTTPS。

## 方式二：直接上传构建包（推荐给只拿成品的用户）
1. 本地已有构建目录（含 `index.html`）。
2. Cloudflare Pages → Create a project → Upload assets。
3. 拖拽整个构建目录上传，等待发布完成。

## 反向代理示例（/api/v1/ 与 /idhub-api/）
如果后端在其他域名，可用 Cloudflare Worker 反代，保留默认路径：
```js
// worker.js
const API_HOST = 'https://xxx.xxx.com';

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname.startsWith('/api/v1/')) {
      const target = new URL(API_HOST);
      target.pathname = url.pathname;
      target.search = url.search;
      return fetch(target.toString(), rewriteHeaders(request, target.host));
    }

    if (url.pathname.startsWith('/idhub-api/')) {
      const target = new URL(API_HOST);
      target.pathname = url.pathname; // 默认后端根路径支持 /idhub-api/
      target.search = url.search;
      return fetch(target.toString(), rewriteHeaders(request, target.host));
    }

    return fetch(request); // 其余请求走静态资源
  },
};

function rewriteHeaders(request, host) {
  const headers = new Headers(request.headers);
  headers.set('Host', host);
  return new Request(request, { headers });
}
```
- 部署：使用 Wrangler 发布 Worker 并绑定到你的域名路由（如 `example.com/api/*`），或在 Pages → Functions 中放置同名文件（需开启 Pages Functions）。
- 将 `xxx.xxx.com` 替换为后端域名；如后端路径不同，调整 `pathname`。

## SPA 路由设置
在 Pages 项目 → Settings → Functions → 添加自定义 404 回退：
- “Build output directory” 保持默认。
- “Custom 404” 选择 `Redirect to /index.html`（或添加 `_redirects` 文件：`/*    /index.html   200`）。

## 常见配置
- 自定义域名：Pages → Custom domains，添加你的域名并完成 DNS 验证，开启 Always Use HTTPS。
- 缓存：默认使用 Cloudflare CDN，可在 Pages → Caching 配置；静态资源已带 hash，无需额外版本化。
- 环境变量：如需在 Pages 端构建时使用，Pages → Settings → Environment variables 添加。

## 故障排查
- 刷新 404：确认已启用 SPA 回退到 `/index.html`。
- 资源 404：检查上传目录完整、大小写一致；若使用子路径，需调整构建时的 `base/publicPath`。
- 域名未生效：检查 DNS 解析是否指向 Cloudflare，或稍待生效。