<template><div><h1 id="shuttle主题总览" tabindex="-1"><a class="header-anchor" href="#shuttle主题总览"><span>Shuttle主题总览</span></a></h1>
<p><strong>Shuttle</strong> 是一套面向节点面板场景的前端主题，专注于前后端分离架构，强调去特质化设计与多后端兼容能力。</p>
<p>该主题不绑定具体后端实现，通过统一的数据抽象与接口约定，可灵活接入不同节点面板后端服务，适配多种部署形态，降低前后端耦合带来的维护与迁移成本。</p>
<p>主题在设计之初即考虑 **去特质（去指纹）**需求：
页面结构、交互逻辑与视觉风格保持高度中性与克制，避免常见面板主题中易被识别的固定布局与组件组合，使其在不同实例、不同站点环境下具备更低的可识别性。
在架构实现上，所有通向后端的请求均通过中间件统一处理，并以反向代理的方式进行转发。前端不直接暴露真实后端地址，既增强了部署灵活性，也为多后端切换、Serverless 环境适配以及后端隔离提供了更高的可控性与安全性。</p>
<p>在部署方面，Shuttle 对 Serverless 场景进行了专项优化，可直接部署至 Cloudflare Pages、Vercel、Netlify 等平台，配合静态构建与边缘分发，实现快速上线、低成本运行与高可用性。</p>
<p>在用户体验上，Shuttle 提供完整的响应式支持，覆盖桌面端与移动端使用场景。移动端交互与动效经过精细控制，确保在性能受限环境下依然保持流畅、稳定、可预期的使用体验。</p>
<blockquote>
<p>按场景快速跳转：拿成品包直接部署、在线打包、更新日志/环境要求，以及不同的部署方式。</p>
</blockquote>
<ul>
<li><strong>更新日志 / 环境</strong>：查看版本变更与本地构建依赖 → <RouteLink to="/changelog.html">更新日志</RouteLink> / <RouteLink to="/env.html">环境要求</RouteLink></li>
<li><strong>在线打包机</strong>：购买用户使用 <a href="https://pac.xiamii.com" target="_blank" rel="noopener noreferrer"><code v-pre>主题打包机</code></a> 生成主题包 → <RouteLink to="/package.html">主题获取指南</RouteLink></li>
<li><strong>宝塔面板部署</strong>：aaPanel 静态站点 + 伪静态/反代示例 → <RouteLink to="/aapanel.html">宝塔面板部署指南</RouteLink></li>
<li><strong>Cloudflare Pages 部署</strong>：成品包发布、SPA 回退、Worker 反代示例 → <RouteLink to="/cloudflare.html">Cloudflare Pages 部署指南</RouteLink></li>
</ul>
</div></template>


