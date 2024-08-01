import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "GZ中学管理平台",
  description: "GZ中学管理平台主页",
  base: "/gz-homepage-test/",

  themeConfig: {

    outline: {
      label: '页面导航'
    },

    nav: [
      { text: '德育综合', link: '/pages/moral' },
      { text: '成绩查询', link: '/pages/grade' },
      { text: '党建管理', link: '/pages/party' },
      { text: '友情链接', 
        items: [
          { text: 'GZ官网', link: 'https://gezhi.hpe.cn' },
        ]
      }
    ],

  }
})
