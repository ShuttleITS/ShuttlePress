---
home: true
title: Shuttle 主题
heroText: Shuttle Theme
tagline: 一次打包，随处部署。面向业务的高颜值、可定制、无服务器化主题。
actions:
  - text: 立即开始
    link: /get-started.html
    type: primary
  - text: 查看演示
    link: https://mimiairport.pages.dev/
    type: secondary
  - text: 主题获取
    link: https://pac.xiamii.com
    type: secondary
features:
  - title: 业务就绪
    details: 套餐、节点、公告、工单等核心模块开箱可用，符合运营习惯。
  - title: 全端适配
    details: 移动端优先 + 深/浅色切换，自定义品牌主色与 Logo。
  - title: 快速变现
    details: 内置兑换码核销与分享页，支持营销活动与账号展示。
  - title: 无服务器托管
    details: 静态产物可直传 Pages，配套 Worker 反代示例，接口同源免折腾。
  - title: 高效构建
    details: 基于 React/Vite 构建，产物轻量、缓存友好，适合 CDN 分发。
  - title: 轻量配置
    details: 文本、下载链接、品牌元素都通过配置完成，无需改动底层代码。
footer: Shuttle 主题文档
---

## 快速路径

<div class="home-panels">
  <div class="panel">
    <p class="eyebrow">打包</p>
    <h3>在线生成主题包</h3>
    <p>登录 <a class="inline-link" href="https://pac.xiamii.com" target="_blank">打包机</a>，锁定机场名称后填好 Logo、前端域名与 API 路径，一键构建即可下载成品包。</p>
    <a class="panel-link" href="/ShuttlePress/package.html">查看打包清单 →</a>
  </div>
  <div class="panel">
    <p class="eyebrow">服务器部署</p>
    <h3>分钟级上线</h3>
    <p>成品包服务器上传，按引导完成搭建，一套流程搞定静态托管与接口反代。</p>
    <a class="panel-link" href="/ShuttlePress/aapanel.html">查看部署教程 →</a>
  </div>
 
  <div class="panel">
    <p class="eyebrow">无服务器部署</p>
    <h3>Serverless服务</h3>
    <p>Pages 托管静态、Workers 反代接口，同域免跨域；预置示例代码和路由方案。</p>
    <a class="panel-link" href="/ShuttlePress/cloudflare.html">参考 Cloudflare 部署 →</a>
  </div>
</div>


::: tip 开发者提示
保持前后端分离：前端只暴露静态资源，接口走反代（如 Nginx/Workers）。这样能最大化安全与稳定性。
:::
