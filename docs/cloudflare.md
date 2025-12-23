# Cloudflare Pages 部署

> 适用于 Shuttle 主题构建产物（`index.html` + `assets/`）。使用 Cloudflare Pages 托管，自动提供 CDN 与 SSL。

## 部署思路
- Pages 只托管静态站点。
- Worker 负责把 `/api/*` 等接口转发到真实后端，前端构建时填 Worker 的地址（同域或 Workers.dev 自带域）作为 API 基址，避免跨域与源站暴露。

## 完整步骤

### 1）准备前端构建产物
- 使用打包机：在前端构建页面，把后端 API 地址填写为 Worker 的 URL（如 `https://api-proxy.example.workers.dev` 或绑定的 `https://api.example.com`），一键打包即可。


### 2）创建 Worker 反代
1. Cloudflare 控制台 → Workers & Pages → Create application → Worker → Quick edit。
2. 粘贴下方示例代码，保存并部署。
3. 将 `ALLOWED_ORIGINS` 换成你的 Pages 域名/自定义域；将 `ROUTES` 中的 `target` 换成真实后端。

```js
// worker.js
// Whitelist frontends. Add more allowed origins as needed.
const ALLOWED_ORIGINS = ['https://example.pages.dev', 'https://www.example.com'];

// Map incoming path prefixes to backend targets
const ROUTES = [
  {
    prefix: '/api/v1/',
    target: 'https://api.example.com/api/v1/',
  },
  {
    prefix: '/idhub-api/',
    target: 'https://id.example.com/',
  },
];

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const route = ROUTES.find(r => url.pathname.startsWith(r.prefix));
    if (!route) {
      return new Response('Not found', { status: 404 });
    }

    // Preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: buildCorsHeaders(),
      });
    }

    const backendPath = url.pathname.slice(route.prefix.length);
    const targetUrl = `${route.target}${backendPath}${url.search}`;

    const headers = new Headers(request.headers);
    headers.set('host', new URL(route.target).host); // ensure Host header matches backend

    const init = {
      method: request.method,
      headers,
      body: request.method === 'GET' || request.method === 'HEAD' ? undefined : request.body,
      redirect: 'manual',
    };

    const resp = await fetch(new Request(targetUrl, init));
    const proxied = new Response(resp.body, resp);
    applyCorsHeaders(proxied.headers, request);
    return proxied;
  },
};

function buildCorsHeaders() {
  const headers = new Headers();
  applyCorsHeaders(headers);
  headers.set('Access-Control-Max-Age', '86400');
  return headers;
}

function applyCorsHeaders(headers, request) {
  const requestOrigin = request?.headers.get('Origin');
  const allowOrigin =
    requestOrigin && ALLOWED_ORIGINS.includes(requestOrigin)
      ? requestOrigin
      : ALLOWED_ORIGINS[0];

  headers.set('Access-Control-Allow-Origin', allowOrigin);
  headers.set('Access-Control-Allow-Credentials', 'true');
  headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  headers.set('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
}
```
- 如果有额外前缀，继续在 `ROUTES` 里追加。
- 若需要把静态资源也交给 Worker，可改用 Pages Functions（把代码放在 `/functions/[[path]].js`），本文用独立 Worker 绑定到 API 路由。

### 3）绑定 Worker 到域名路由
1. Worker 详情 → Triggers → Add custom domain 或 Routes。
2. 示例：`example.com/api/*` 指向上面创建的 Worker。这样 `/api/...` 走 Worker，其余路径仍由 Pages 提供静态资源。
3. 若暂不绑定自定义域，可直接用 `https://<worker>.workers.dev` 作为 API 基址（但前端也要把允许源里加上对应域名）。

### 4）发布 Pages 静态站点
**方式 A：连接仓库（推荐）**
1. 登录 Cloudflare → Pages → Create a project → 选择仓库。
2. Build command：**留空**（上传构建产物即可）；Build output directory：`dist`；Framework preset：`None`。
3. 保存并部署。

**方式 B：直接上传构建包**
1. Pages → Create a project → Upload assets。
2. 拖拽 `dist/`（含 `index.html`）上传。

部署后在 Pages → Settings 绑定自定义域名（如 `www.example.com`），并开启强制 HTTPS。若已在步骤 3 绑定了 `example.com/api/*`，确保 Pages 的域名与 Worker 域名一致，这样前端与接口同源。

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
