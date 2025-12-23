import comp from "/Users/yinian/Desktop/Shuttle/docs/.vuepress/.temp/pages/cloudflare.html.vue"
const data = JSON.parse("{\"path\":\"/cloudflare.html\",\"title\":\"Cloudflare Pages 部署\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"部署思路\",\"slug\":\"部署思路\",\"link\":\"#部署思路\",\"children\":[]},{\"level\":2,\"title\":\"完整步骤\",\"slug\":\"完整步骤\",\"link\":\"#完整步骤\",\"children\":[{\"level\":3,\"title\":\"1）准备前端构建产物\",\"slug\":\"_1-准备前端构建产物\",\"link\":\"#_1-准备前端构建产物\",\"children\":[]},{\"level\":3,\"title\":\"2）创建 Worker 反代\",\"slug\":\"_2-创建-worker-反代\",\"link\":\"#_2-创建-worker-反代\",\"children\":[]},{\"level\":3,\"title\":\"3）绑定 Worker 到域名路由\",\"slug\":\"_3-绑定-worker-到域名路由\",\"link\":\"#_3-绑定-worker-到域名路由\",\"children\":[]},{\"level\":3,\"title\":\"4）发布 Pages 静态站点\",\"slug\":\"_4-发布-pages-静态站点\",\"link\":\"#_4-发布-pages-静态站点\",\"children\":[]}]},{\"level\":2,\"title\":\"SPA 路由设置\",\"slug\":\"spa-路由设置\",\"link\":\"#spa-路由设置\",\"children\":[]},{\"level\":2,\"title\":\"常见配置\",\"slug\":\"常见配置\",\"link\":\"#常见配置\",\"children\":[]},{\"level\":2,\"title\":\"故障排查\",\"slug\":\"故障排查\",\"link\":\"#故障排查\",\"children\":[]}],\"git\":{\"updatedTime\":1765778259000,\"contributors\":[{\"name\":\"shuttleITS\",\"username\":\"shuttleITS\",\"email\":\"i@xiamii.com\",\"commits\":1,\"url\":\"https://github.com/shuttleITS\"}],\"changelog\":[{\"hash\":\"d24cde3e182d5bfc6af249a7e657bbdffed1897e\",\"time\":1765778259000,\"email\":\"i@xiamii.com\",\"author\":\"shuttleITS\",\"message\":\"first\"}]},\"filePathRelative\":\"cloudflare.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
