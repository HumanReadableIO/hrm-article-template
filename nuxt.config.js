import pkg from './package'
import path from 'path'

// const path = require(".");

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "Human Readable Magazine",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content:'black'},
      { name: 'apple-mobile-web-app-title', content:"Human Readable Magazine"},
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '~/assets/icons/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Libre+Baskerville' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lora' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=DM+Serif+Text' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Hammersmith+One' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' },
      { rel: 'alternate', type: 'application/rss+xml', title: 'Human Readable Magazine issues', href: '/feed.xml'}
    ],
    script: [
      { src: "https://code.jquery.com/jquery-3.3.1.min.js", type: "text/javascript" },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js", type: "text/javascript" },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/app.scss', // use our build, as entered via app.scss
    { src: '~/node_modules/highlight.js/styles/hopscotch.css', lang: 'css' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/font_awesome_icons.js' }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    '@nuxtjs/markdownit',
    ['@nuxtjs/bootstrap-vue', { css: false }]
  ],
  
  markdownit: {
    injected: true,
    preset: 'default',
    breaks: true,
    html: true,
    langPrefix: 'language-',
    use: [
      'markdown-it-highlightjs',
      'markdown-it-imsize',
      //['markdown-it-implicit-figures', { figcaption: true }]
      'markdown-it-attrs',
      'markdown-it-katex',
      'markdown-it-front-matter'    
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    postcss: {
      precss: { },
      autoprefixer: { }      
    },

    extend(config, ctx) {
      config.node = { fs: 'empty' }
      // config.module.rules.push(
      //   {
      //     test: /\.md/,
      //     loader: 'markdownit'
      //   }
      // )
    }
  },
  
  router: {
    linkActiveClass: "active",
    fallback: true
  }
}