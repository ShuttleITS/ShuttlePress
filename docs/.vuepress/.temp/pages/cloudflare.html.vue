<template><div><h1 id="cloudflare-pages-部署" tabindex="-1"><a class="header-anchor" href="#cloudflare-pages-部署"><span>Cloudflare Pages 部署</span></a></h1>
<blockquote>
<p>适用于 Shuttle 主题构建产物（<code v-pre>index.html</code> + <code v-pre>assets/</code>）。使用 Cloudflare Pages 托管，自动提供 CDN 与 SSL。</p>
</blockquote>
<h2 id="方式一-连接仓库" tabindex="-1"><a class="header-anchor" href="#方式一-连接仓库"><span>方式一：连接仓库</span></a></h2>
<ol>
<li>登录 Cloudflare → Pages → Create a project → 选择仓库。</li>
<li>构建设置：
<ul>
<li>Framework preset：<code v-pre>None</code>（静态站点）</li>
<li>Build command：<strong>留空</strong>（因为你上传的是已构建产物）</li>
<li>Build output directory：<code v-pre>dist</code></li>
</ul>
</li>
<li>保存并部署，CF 会直接发布已有产物，不会执行构建。</li>
<li>部署完成后在 Pages → Settings 中绑定自定义域名并开启强制 HTTPS。</li>
</ol>
<h2 id="方式二-直接上传构建包-推荐给只拿成品的用户" tabindex="-1"><a class="header-anchor" href="#方式二-直接上传构建包-推荐给只拿成品的用户"><span>方式二：直接上传构建包（推荐给只拿成品的用户）</span></a></h2>
<ol>
<li>本地已有构建目录（含 <code v-pre>index.html</code>）。</li>
<li>Cloudflare Pages → Create a project → Upload assets。</li>
<li>拖拽整个构建目录上传，等待发布完成。</li>
</ol>
<h2 id="反向代理示例-api-v1-与-idhub-api" tabindex="-1"><a class="header-anchor" href="#反向代理示例-api-v1-与-idhub-api"><span>反向代理示例（/api/v1/ 与 /idhub-api/）</span></a></h2>
<p>如果后端在其他域名，可用 Cloudflare Worker 反代，保留默认路径：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// worker.js</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token constant">API_HOST</span> <span class="token operator">=</span> <span class="token string">'https://xxx.xxx.com'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span>pathname<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">'/api/v1/'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token constant">API_HOST</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      target<span class="token punctuation">.</span>pathname <span class="token operator">=</span> url<span class="token punctuation">.</span>pathname<span class="token punctuation">;</span></span>
<span class="line">      target<span class="token punctuation">.</span>search <span class="token operator">=</span> url<span class="token punctuation">.</span>search<span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">rewriteHeaders</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> target<span class="token punctuation">.</span>host<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span>pathname<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">'/idhub-api/'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token constant">API_HOST</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      target<span class="token punctuation">.</span>pathname <span class="token operator">=</span> url<span class="token punctuation">.</span>pathname<span class="token punctuation">;</span> <span class="token comment">// 默认后端根路径支持 /idhub-api/</span></span>
<span class="line">      target<span class="token punctuation">.</span>search <span class="token operator">=</span> url<span class="token punctuation">.</span>search<span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">rewriteHeaders</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> target<span class="token punctuation">.</span>host<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 其余请求走静态资源</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">rewriteHeaders</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> host</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> headers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>headers<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'Host'</span><span class="token punctuation">,</span> host<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Request</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token punctuation">{</span> headers <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>部署：使用 Wrangler 发布 Worker 并绑定到你的域名路由（如 <code v-pre>example.com/api/*</code>），或在 Pages → Functions 中放置同名文件（需开启 Pages Functions）。</li>
<li>将 <code v-pre>xxx.xxx.com</code> 替换为后端域名；如后端路径不同，调整 <code v-pre>pathname</code>。</li>
</ul>
<h2 id="spa-路由设置" tabindex="-1"><a class="header-anchor" href="#spa-路由设置"><span>SPA 路由设置</span></a></h2>
<p>在 Pages 项目 → Settings → Functions → 添加自定义 404 回退：</p>
<ul>
<li>“Build output directory” 保持默认。</li>
<li>“Custom 404” 选择 <code v-pre>Redirect to /index.html</code>（或添加 <code v-pre>_redirects</code> 文件：<code v-pre>/*    /index.html   200</code>）。</li>
</ul>
<h2 id="常见配置" tabindex="-1"><a class="header-anchor" href="#常见配置"><span>常见配置</span></a></h2>
<ul>
<li>自定义域名：Pages → Custom domains，添加你的域名并完成 DNS 验证，开启 Always Use HTTPS。</li>
<li>缓存：默认使用 Cloudflare CDN，可在 Pages → Caching 配置；静态资源已带 hash，无需额外版本化。</li>
<li>环境变量：如需在 Pages 端构建时使用，Pages → Settings → Environment variables 添加。</li>
</ul>
<h2 id="故障排查" tabindex="-1"><a class="header-anchor" href="#故障排查"><span>故障排查</span></a></h2>
<ul>
<li>刷新 404：确认已启用 SPA 回退到 <code v-pre>/index.html</code>。</li>
<li>资源 404：检查上传目录完整、大小写一致；若使用子路径，需调整构建时的 <code v-pre>base/publicPath</code>。</li>
<li>域名未生效：检查 DNS 解析是否指向 Cloudflare，或稍待生效。</li>
</ul>
</div></template>


