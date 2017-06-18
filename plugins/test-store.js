export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.testStore = {
    posts: 'posts here'
  }
}



// app.i18n = new VueI18n({
//   locale: store.state.locale,
//   fallbackLocale: 'en',
//   messages: {
//     'en': require('~/locales/en.json'),
//     'fr': require('~/locales/fr.json')
//   }
// })
