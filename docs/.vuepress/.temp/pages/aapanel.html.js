import comp from "/Users/yinian/Desktop/Shuttle/docs/.vuepress/.temp/pages/aapanel.html.vue"
const data = JSON.parse("{\"path\":\"/aapanel.html\",\"title\":\"宝塔面板（aaPanel）部署指南\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"前提\",\"slug\":\"前提\",\"link\":\"#前提\",\"children\":[]},{\"level\":2,\"title\":\"部署步骤\",\"slug\":\"部署步骤\",\"link\":\"#部署步骤\",\"children\":[]},{\"level\":2,\"title\":\"常见问题\",\"slug\":\"常见问题\",\"link\":\"#常见问题\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"aapanel.md\"}")
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
