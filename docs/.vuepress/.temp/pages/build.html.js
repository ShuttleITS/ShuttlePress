import comp from "/Users/yinian/Desktop/Shuttle/docs/.vuepress/.temp/pages/build.html.vue"
const data = JSON.parse("{\"path\":\"/build.html\",\"title\":\"主题打包构建（可选）\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"环境\",\"slug\":\"环境\",\"link\":\"#环境\",\"children\":[]},{\"level\":2,\"title\":\"步骤\",\"slug\":\"步骤\",\"link\":\"#步骤\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"build.md\"}")
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
