<template><div><h1 id="主题打包构建-可选" tabindex="-1"><a class="header-anchor" href="#主题打包构建-可选"><span>主题打包构建（可选）</span></a></h1>
<blockquote>
<p>仅在需要修改 React + TypeScript 源码并重新打包时使用。</p>
</blockquote>
<h2 id="环境" tabindex="-1"><a class="header-anchor" href="#环境"><span>环境</span></a></h2>
<ul>
<li>Node.js ≥ 18（推荐 LTS）</li>
<li>npm / pnpm / yarn（任选其一）</li>
<li>Git（如需拉取源码）</li>
</ul>
<h2 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤"><span>步骤</span></a></h2>
<ol>
<li>安装依赖</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>本地开发（视源码仓库脚本为准）</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="3">
<li>生产构建</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run build</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="4">
<li>构建产物</li>
</ol>
<ul>
<li>输出目录通常为 <code v-pre>dist/</code> 或 <code v-pre>build/</code>，包含 <code v-pre>index.html</code> 与 <code v-pre>assets/</code>。</li>
<li>上传整个目录到服务器/CDN 即可上线。</li>
</ul>
<blockquote>
<p>本仓库的 <code v-pre>docs/</code> 目录仅用于文档（VuePress），与主题源码构建产物分离。*** End Patch&quot; ***!</p>
</blockquote>
</div></template>


