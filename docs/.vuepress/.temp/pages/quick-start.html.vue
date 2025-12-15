<template><div><h1 id="快速使用-成品包" tabindex="-1"><a class="header-anchor" href="#快速使用-成品包"><span>快速使用（成品包）</span></a></h1>
<blockquote>
<p>适用于已经拿到构建好的静态包的场景，无需本地构建。</p>
</blockquote>
<ol>
<li>获取主题成品包：包含 <code v-pre>index.html</code>、<code v-pre>assets/</code> 等静态文件。</li>
<li>将整个目录上传到服务器目录（例：<code v-pre>/var/www/xxx.xxx.com</code>）。</li>
<li>确保入口是 <code v-pre>index.html</code>，静态资源目录层级保持不变。</li>
<li>React SPA 需要配置 404 回退到 <code v-pre>index.html</code>（参考部署示例页面中的 Nginx/OSS 配置）。*** End Patch ***!</li>
</ol>
</div></template>


