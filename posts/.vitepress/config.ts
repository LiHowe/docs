import { defineConfig } from 'vitepress'
import markdownItMermaidx from './plugin/markdown-it-mermaidx'
import { fabricSidebar } from './sidebar/fabric'

export default defineConfig({
  title: 'zhDocs',
  lang: 'zh-CN',
  base: '/',
  outDir: '../dist',
  head: [
    ['link', { rel: 'shortcut icon', type:"image/png", href:"/public/favicon.png"}]
  ],
  themeConfig: {
    sidebar: {
      '/fabric/': fabricSidebar
    },
    footer: {
      message: 'Build with ❤️ in HangZhou',
      copyright: 'Copyright © 2022-present <a href="https://github.com/lihowe">Howe</a>'
    },
    outlineTitle: '目录',
    outline: [2, 3],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lihowe/canvas' }
    ],
    docFooter: {
      prev: '上一节',
      next: '下一节'
    }
  },
  markdown: {
    toc: {
      level: [2, 3]
    },
    lineNumbers: true,
    config: (md) => {
      md.use(markdownItMermaidx)
    }
  },
})
