module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    { src: '~assets/css/scss/surface_styles.scss', lang: 'scss'},
  ],
  router: { base: '/testnuxt/' },
  modules: [
    // '@nuxtjs/axios',
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
    },
    '@nuxtjs/font-awesome'
  ],

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
  }
}
