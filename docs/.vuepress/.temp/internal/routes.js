export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yinian/Desktop/Shuttle/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Shuttle 主题"} }],
  ["/aapanel.html", { loader: () => import(/* webpackChunkName: "aapanel.html" */"/Users/yinian/Desktop/Shuttle/docs/.vuepress/.temp/pages/aapanel.html.js"), meta: {"title":"宝塔面板（aaPanel）部署指南"} }],
  ["/changelog.html", { loader: () => import(/* webpackChunkName: "changelog.html" */"/Users/yinian/Desktop/Shuttle/docs/.vuepress/.temp/pages/changelog.html.js"), meta: {"title":"更新日志"} }],
  ["/cloudflare.html", { loader: () => import(/* webpackChunkName: "cloudflare.html" */"/Users/yinian/Desktop/Shuttle/docs/.vuepress/.temp/pages/cloudflare.html.js"), meta: {"title":"Cloudflare Pages 部署"} }],
  ["/env.html", { loader: () => import(/* webpackChunkName: "env.html" */"/Users/yinian/Desktop/Shuttle/docs/.vuepress/.temp/pages/env.html.js"), meta: {"title":"部署环境要求"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/yinian/Desktop/Shuttle/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Shuttle主题总览"} }],
  ["/package.html", { loader: () => import(/* webpackChunkName: "package.html" */"/Users/yinian/Desktop/Shuttle/docs/.vuepress/.temp/pages/package.html.js"), meta: {"title":"主题打包"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/yinian/Desktop/Shuttle/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
