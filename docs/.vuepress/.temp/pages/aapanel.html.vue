<template><div><h1 id="宝塔面板-aapanel-部署指南" tabindex="-1"><a class="header-anchor" href="#宝塔面板-aapanel-部署指南"><span>宝塔面板（aaPanel）部署指南</span></a></h1>
<blockquote>
<p>适用于已构建好的 Shuttle 主题包（<code v-pre>index.html</code> + <code v-pre>assets/</code>）。在宝塔里直接作为静态站点部署。</p>
</blockquote>
<h2 id="前提" tabindex="-1"><a class="header-anchor" href="#前提"><span>前提</span></a></h2>
<ul>
<li>域名已解析到服务器 IP。</li>
<li>服务器已安装宝塔面板并可登录。</li>
<li>已有构建产物目录（dist），包含 <code v-pre>index.html</code>。</li>
</ul>
<h2 id="部署步骤" tabindex="-1"><a class="header-anchor" href="#部署步骤"><span>部署步骤</span></a></h2>
<ol>
<li>
<p><strong>新增站点</strong></p>
<ul>
<li>宝塔 → 网站 → 添加站点。</li>
<li>填域名、根目录（例：<code v-pre>/www/wwwroot/shuttle</code>），类型选“纯静态”。</li>
<li>证书可稍后在网站设置中开启。</li>
</ul>
</li>
<li>
<p><strong>上传构建产物</strong></p>
<ul>
<li>用文件管理或 SFTP，将构建目录内容上传到站点根目录。</li>
<li>确认根目录下有 <code v-pre>index.html</code>、<code v-pre>assets/</code> 等文件/目录。</li>
</ul>
</li>
<li>
<p><strong>配置伪静态 / 反向代理</strong></p>
</li>
</ol>
<ul>
<li>网站 → 设置 → 伪静态 → 自定义，若使用默认后端路径 <code v-pre>/api/v1/</code> 与 <code v-pre>/idhub-api/</code>，可直接使用下方配置并重载：</li>
</ul>
<div class="language-nginx line-numbers-mode" data-highlighter="prismjs" data-ext="nginx"><pre v-pre><code><span class="line"><span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token directive"><span class="token keyword">location</span> /api/v1/</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">proxy_pass</span> https://xxx.xxx.com/api/v1/</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">proxy_set_header</span> Host xxx.xxx.com</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">proxy_ssl_server_name</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token directive"><span class="token keyword">location</span> /idhub-api/</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">proxy_pass</span> https://xxx.xxx.com/</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">proxy_set_header</span> Host xxx.xxx.com</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">proxy_ssl_server_name</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>请将 <code v-pre>xxx.xxx.com</code> 替换为你的后端域名。如后端路径有变，更新 <code v-pre>proxy_pass</code> 即可。</li>
</ul>
<ol start="4">
<li>
<p><strong>SSL（可选）</strong></p>
<ul>
<li>网站 → 设置 → SSL，申请/上传证书，开启“强制 HTTPS”。</li>
</ul>
</li>
<li>
<p><strong>优化与安全</strong></p>
<ul>
<li>关闭目录列表：网站 → 设置 → 目录防护，确保未开启目录浏览。</li>
<li>开启 gzip：网站 → 设置 → 性能优化/Nginx 防火墙，按需开启 gzip。</li>
<li>路径检查：确认上传完整且大小写一致；如部署子路径，需在构建时调整 <code v-pre>base/publicPath</code>。</li>
</ul>
</li>
</ol>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2>
<ul>
<li>刷新 404：未配置 <code v-pre>try_files ... /index.html</code>，按上方伪静态设置重载。</li>
<li>资源 404：检查上传完整、路径大小写；若子路径部署，调整构建 <code v-pre>base/publicPath</code>。</li>
<li>域名不生效：检查 DNS 是否指向服务器，或等待解析生效。</li>
</ul>
</div></template>


