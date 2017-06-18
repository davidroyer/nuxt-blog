export const store = {
  state: {
    test: 'test string',
    firebase: ''
  },
  fireInit (vm) {
    console.log(vm.$firebase.database().ref('posts'))
  }
}
