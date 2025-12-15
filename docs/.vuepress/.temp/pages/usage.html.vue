<template><div><h1 id="使用与部署-常见问题" tabindex="-1"><a class="header-anchor" href="#使用与部署-常见问题"><span>使用与部署 + 常见问题</span></a></h1>
<h2 id="部署示例" tabindex="-1"><a class="header-anchor" href="#部署示例"><span>部署示例</span></a></h2>
<h3 id="nginx-静态部署" tabindex="-1"><a class="header-anchor" href="#nginx-静态部署"><span>Nginx 静态部署</span></a></h3>
<div class="language-nginx line-numbers-mode" data-highlighter="prismjs" data-ext="nginx"><pre v-pre><code><span class="line"><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">server_name</span> your-domain.com</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">root</span> /var/www/shuttle-theme</span><span class="token punctuation">;</span>    <span class="token comment"># 指向构建产物根目录</span></span>
<span class="line"></span>
<span class="line">  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html</span><span class="token punctuation">;</span> <span class="token comment"># SPA 路由回退</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="oss-cdn-静态托管" tabindex="-1"><a class="header-anchor" href="#oss-cdn-静态托管"><span>OSS/CDN 静态托管</span></a></h3>
<ul>
<li>上传构建产物，开启静态网站托管。</li>
<li>未匹配路径回退到 <code v-pre>/index.html</code>，可绑定自定义域名/CDN。</li>
</ul>
<h3 id="github-pages-直接推送构建产物" tabindex="-1"><a class="header-anchor" href="#github-pages-直接推送构建产物"><span>GitHub Pages（直接推送构建产物）</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token builtin class-name">cd</span> /path/to/built/theme   <span class="token comment"># 包含 index.html 的目录</span></span>
<span class="line"><span class="token function">git</span> init</span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span></span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"deploy"</span></span>
<span class="line"><span class="token function">git</span> branch <span class="token parameter variable">-M</span> gh-pages</span>
<span class="line"><span class="token function">git</span> remote <span class="token function">add</span> origin <span class="token operator">&lt;</span>your-repo-url<span class="token operator">></span></span>
<span class="line"><span class="token function">git</span> push <span class="token parameter variable">-f</span> origin gh-pages</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在仓库设置中将 Pages 来源设为 <code v-pre>gh-pages</code> 分支根目录。</p>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2>
<ul>
<li>刷新 404：静态服务器未配置 SPA 回退，添加 <code v-pre>try_files ... /index.html</code>。</li>
<li>资源 404：检查上传路径、大小写；如放子目录，确认 <code v-pre>publicPath/base</code> 与部署路径一致。</li>
<li>缓存未刷新：清理 CDN/浏览器缓存；默认构建带 hash，可强制刷新。*** End Patch&quot; ***!</li>
</ul>
</div></template>


