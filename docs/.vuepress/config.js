import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'Shuttle',
  description: 'Shuttle 前端主题的安装、配置与定制指南',

  theme: defaultTheme({
    navbar: [
      { text: '首页', link: '/' },
      { text: '使用指南', link: '/get-started' },
    ],
    sidebar: [
      { children: ['/get-started.md','/changelog.md','/env.md'] },
      {
        text: '主题获取',
        children: [
          '/package.md'
        ],
      }
      ,
      {
        text: '部署',
        children: [
          '/aapanel.md',
          '/cloudflare.md',
        ],
      },
    ],
  }),

  bundler: viteBundler(),
})
