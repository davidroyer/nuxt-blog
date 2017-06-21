<template>

    <div>

      <div class="posts">
            <!-- :style="{ 'background-image': 'url(' + bgImage + ')' }" -->

        <template v-for="post in posts">
          <div class=" card g--5 g-s--12"
            :key="post.slug"
            @click="handleRoute(post.slug)">
              <img :src="post.image ? post.image : 'https://placehold.it/680x450' " alt="">
              <router-link :to="`/posts/${post.slug}`">
                <h2>{{post.title}}</h2>
              </router-link>

            <div v-html="post.content"></div>

          </div>
        </template>
      </div>

    </div>

</template>

<script>
import Logo from '~components/Logo.vue'
import axios from '~plugins/axios'
var apiFile = require('../services/api.js')

var Store = apiFile.store
console.log(Store)
export default {
  components: {
    Logo
  },
  async asyncData (context) {
    // const {data} = await app.$axios.get('http://icanhazip.com')
    console.log(context);
    const {data} = await axios.get('posts.json')
    return {
      // ip: data,
      posts: data,
      bgImage: './laptop-desk.jpg'
    }
  },
  mounted () {
    Store.fireInit(this)
    // console.log(this.$firebase.auth())
    // console.log(this)
    // console.log(this.$firebase.storage())
    // this.$firebase.database().ref('modules').set('value')
  },
  methods: {
    handleUpload (event) {
      let file = event.target.files[0]
      let newFileRef = this.$firebase.storage().ref(`${file.name}`)
      let uploadTask = newFileRef.put(file)
      console.log(uploadTask)
    },
    handleRoute(slug) {
      this.$router.push({ path:`/posts/${slug}`})
    }
  }
}
</script>

<style lang="scss">

.posts {
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;

    .post {
      height: 380px;
      background-size: cover;
      background-position: center;
    }

}

.inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}


.page-enter,
.page-leave-active {
  opacity: 0;
}

.card {
  cursor: pointer;
  transition: all .3s ease;
  &:hover, &:focus {
    background: rgba(26, 188, 156, 0.07);
  }
}
// .post {
//     position: absolute;
//     background: #d5c5c5;
//     height: 100%;
//     top: 177px;
//     width: 100%;
// }

#__nuxt {
  position: relative;
    // background: #ffe7e7;
    height: calc(100vh);
}
</style>
