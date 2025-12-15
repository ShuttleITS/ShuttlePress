# 宝塔面板（aaPanel）部署指南

> 适用于已构建好的 Shuttle 主题包（`index.html` + `assets/`）。在宝塔里直接作为静态站点部署。

## 前提

- 域名已解析到服务器 IP。
- 服务器已安装宝塔面板并可登录。
- 已有构建产物目录（dist），包含 `index.html`。

## 部署步骤

1) **新增站点**
   - 宝塔 → 网站 → 添加站点。
   - 填域名、根目录（例：`/www/wwwroot/shuttle`），类型选“纯静态”。
   - 证书可稍后在网站设置中开启。

2) **上传构建产物**
   - 用文件管理或 SFTP，将构建目录内容上传到站点根目录。
   - 确认根目录下有 `index.html`、`assets/` 等文件/目录。

3) **配置伪静态 / 反向代理**
- 网站 → 设置 → 伪静态 → 自定义，若使用默认后端路径 `/api/v1/` 与 `/idhub-api/`，可直接使用下方配置并重载：
```nginx
location / {
    try_files $uri $uri/ /index.html;
}

location /api/v1/ {
  proxy_pass https://xxx.xxx.com/api/v1/;
  proxy_set_header Host xxx.xxx.com;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_ssl_server_name on;
}

location /idhub-api/ {
  proxy_pass https://xxx.xxx.com/;
  proxy_set_header Host xxx.xxx.com;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_ssl_server_name on;
}
```
- 请将 `xxx.xxx.com` 替换为你的后端域名。如后端路径有变，更新 `proxy_pass` 即可。

4) **SSL（可选）**
   - 网站 → 设置 → SSL，申请/上传证书，开启“强制 HTTPS”。

5) **优化与安全**
   - 关闭目录列表：网站 → 设置 → 目录防护，确保未开启目录浏览。
   - 开启 gzip：网站 → 设置 → 性能优化/Nginx 防火墙，按需开启 gzip。
   - 路径检查：确认上传完整且大小写一致；如部署子路径，需在构建时调整 `base/publicPath`。

## 常见问题

- 刷新 404：未配置 `try_files ... /index.html`，按上方伪静态设置重载。
- 资源 404：检查上传完整、路径大小写；若子路径部署，调整构建 `base/publicPath`。
- 域名不生效：检查 DNS 是否指向服务器，或等待解析生效。
