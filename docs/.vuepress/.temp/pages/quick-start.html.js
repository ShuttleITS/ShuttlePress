import comp from "/Users/yinian/Desktop/Shuttle/docs/.vuepress/.temp/pages/quick-start.html.vue"
const data = JSON.parse("{\"path\":\"/quick-start.html\",\"title\":\"快速使用（成品包）\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"quick-start.md\"}")
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
