import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/htmls/',
  title: "文档",
  description: "A VitePress Site For Study Files",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Java',
        items: [
          { text: 'Spring', link: '/spring6/spring6' },
          { text: 'JVM', link: '/indexPages/jvm' },
          { text: 'RocketMQ',link: 'https://docs.qq.com/pdf/DWVhyWk1jTHBJVXRl?'},
          { text: '设计模式',link: '/DesignPattern/index'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search:{
      provider: 'local',
    }
  }
})
