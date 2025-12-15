import comp from "/Users/yinian/Desktop/Shuttle/docs/.vuepress/.temp/pages/usage.html.vue"
const data = JSON.parse("{\"path\":\"/usage.html\",\"title\":\"使用与部署 + 常见问题\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"部署示例\",\"slug\":\"部署示例\",\"link\":\"#部署示例\",\"children\":[{\"level\":3,\"title\":\"Nginx 静态部署\",\"slug\":\"nginx-静态部署\",\"link\":\"#nginx-静态部署\",\"children\":[]},{\"level\":3,\"title\":\"OSS/CDN 静态托管\",\"slug\":\"oss-cdn-静态托管\",\"link\":\"#oss-cdn-静态托管\",\"children\":[]},{\"level\":3,\"title\":\"GitHub Pages（直接推送构建产物）\",\"slug\":\"github-pages-直接推送构建产物\",\"link\":\"#github-pages-直接推送构建产物\",\"children\":[]}]},{\"level\":2,\"title\":\"常见问题\",\"slug\":\"常见问题\",\"link\":\"#常见问题\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"usage.md\"}")
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
