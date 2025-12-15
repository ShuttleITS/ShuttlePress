import comp from "/Users/yinian/Desktop/Shuttle/docs/.vuepress/.temp/pages/package.html.vue"
const data = JSON.parse("{\"path\":\"/package.html\",\"title\":\"主题打包\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"获取主题包\",\"slug\":\"获取主题包\",\"link\":\"#获取主题包\",\"children\":[]},{\"level\":2,\"title\":\"登录与机场名称锁定\",\"slug\":\"登录与机场名称锁定\",\"link\":\"#登录与机场名称锁定\",\"children\":[]},{\"level\":2,\"title\":\"构建表单字段\",\"slug\":\"构建表单字段\",\"link\":\"#构建表单字段\",\"children\":[]},{\"level\":2,\"title\":\"打包流程\",\"slug\":\"打包流程\",\"link\":\"#打包流程\",\"children\":[]},{\"level\":2,\"title\":\"注意事项\",\"slug\":\"注意事项\",\"link\":\"#注意事项\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"package.md\"}")
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
