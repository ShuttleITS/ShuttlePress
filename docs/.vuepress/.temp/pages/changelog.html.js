import comp from "/Users/yinian/Desktop/Shuttle/docs/.vuepress/.temp/pages/changelog.html.vue"
const data = JSON.parse("{\"path\":\"/changelog.html\",\"title\":\"更新日志\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1765778259000,\"contributors\":[{\"name\":\"shuttleITS\",\"username\":\"shuttleITS\",\"email\":\"i@xiamii.com\",\"commits\":1,\"url\":\"https://github.com/shuttleITS\"}],\"changelog\":[{\"hash\":\"d24cde3e182d5bfc6af249a7e657bbdffed1897e\",\"time\":1765778259000,\"email\":\"i@xiamii.com\",\"author\":\"shuttleITS\",\"message\":\"first\"}]},\"filePathRelative\":\"changelog.md\"}")
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
