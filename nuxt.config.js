var _ = require('lodash');
const axios = require('axios')

function slugify(input) {
  let output = input.toLowerCase()
   .replace(/[^\w\s-]/g, '') // remove non-word [a-z0-9_], non-whitespace, non-hyphen characters
   .replace(/[\s_-]+/g, '-') // swap any length of whitespace, underscore, hyphen characters with a single -
   .replace(/^-+|-+$/g, ''); // remove leading, trailing -
  return output
}

function getSlugs(post, index) {
  let slug = slugify(post.title)
  return `/post/${slug}`
}


module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'NuxtFire Blog - David Royer',
    titleTemplate: '%s - NuxtFire Blog - David Royer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Demo of NuxtFire Blog. Made by David Royer, Front-End Web Designer and Developer' }
    ],
    link: [
      { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css?family=Roboto' },
      { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },

    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  vendor: ['axios', 'firebase'],
  css: [
    { src: '~assets/css/main.scss', lang: 'scss'},
    { src: '~assets/css/scss/surface_styles.scss', lang: 'scss'},
  ],
  modules: [
    // '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // '@nuxtjs/component-cache',
    {
      src: '@rafamaciel/firebase',
      options: {
        apiKey: "AIzaSyCz8gCkmdI8jV-jB9_2sgH2rP1s7CyuiAY",
        authDomain: "nuxtfire.firebaseapp.com",
        databaseURL: "https://nuxtfire.firebaseio.com",
        projectId: "nuxtfire",
        storageBucket: "nuxtfire.appspot.com",
        messagingSenderId: "355187584526"
      }
    }
    // '@nuxtjs/font-awesome'
  ],
  manifest: {
    name: 'Nuxt Blog PWA',
    description: 'Simple PWA Blog with Nuxt',
    theme_color: '#188269'
  },
  plugins: [
    {src:'~plugins/test-store.js', injectAs: 'testStore'}
  ],
  build: {
    extractCSS: true
    /*
    ** Run ESLINT on save
    */
    // extend (config, ctx) {
    //   if (ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },
  generate: {
    routes: function() {
      return axios.get('https://nuxtfire.firebaseio.com/posts.json')
      .then((res) => {
        return _.map(res.data, function(post, key) {
          return `/posts/${post.slug}`
        })

      })
    }
    // routes: function() {
    //   return postsArray.map(getSlugs)
    //   return axios.get('/static/blog.json')
    //   .then((res) => {
    //     return _.map(res.data, function(post, key) {
    //       return `/test/${post.slug}`
    //     })
    //
    //   })
    // }
  },
}
