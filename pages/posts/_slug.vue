<template>
  <div class="post container">

<!-- <i class="fa fa-arrow-circle-o-left fa-3x" aria-hidden="true"  @click="$router.push('/')"></i> -->
    <!-- <button type="button" name="button" class="btn-rasied" @click="$router.push('/')"></button> -->
    <transition name="fade" mode="out-in">
      <div :key="$route.params.slug">

        <template v-if="image">
          <div class="bannerWrapper">
            <h1 class="postTitle" v-html="title"></h1>
            <img :src="image" alt="" class="bannerImage">
          </div>
        </template>
        <h1 v-else class="postTitle" v-html="title"></h1>
        <div class="content" v-html="content"></div>
        <!-- <vue-editor v-model="post.content"></vue-editor> -->
      </div>
    </transition>
    <button class="backNavigation" @click="$router.push('/')">
      <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
      </svg>
    </button>
  </div>
</template>

<script>
import axios from '~/plugins/axios.js'
import marked from 'marked'
const FM = require('front-matter')
var md = require('markdown-it')();

export default {

  head () {
    return {
      title: this.title
    }
  },
  fetch({params}) {

  },
  async asyncData({route, isClient, isServer}) {
    const slug = route.params.slug

    const { data } = await
     axios.get(`/posts.json?orderBy="slug"&equalTo="${slug}"&print=pretty`)
     var keys = Object.keys(data)
     var key = keys[0]
     console.log(data[key]);
     var postData = data[key]
     var result = md.render(postData.content);
    console.log(result);

     return {
       title: postData.title,
       image: './laptop-desk.jpg',
       content: marked(postData.content, { sanitize: true }),
       source: isServer ? 'Server' : 'Client'
       // markdownFile: marked(data, { sanitize: true })
     }
  },
  data() {
  },
  watch: {
    // '$route': 'getPost'
  },
  beforeRouteEnter (to, from, next) {

    next(vm => {
      console.log('From Guard', vm.editorReady);
    });
  },
  methods: {

  },
  mounted() {

  },
  created() {
    // this.getPost()
  }
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.bannerWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
.bannerImage {
  width: 100%;
  height: 40vw;
  max-height: 700px;
}

.postTitle {
  z-index: 99999;
  margin-bottom: .5em;
  margin-top: .5em;
  font-size: 8vw;
  font-weight: 600;
  color: #4d4d4d;
}

.content {
  margin-top: 2em;
  font-size: .9em;

  > * {
    font-size: 1.4em;
  }
}
@media (min-width:581px) {
  .postTitle {
    font-size: 6vw;
  }
}

@media (min-width: 901px) {
  .postTitle {
    font-size: 70px;
    color: white;
    position: absolute;
    margin: 0;
    bottom: 50%;
  }

  .bannerImage {
    filter: brightness(.8) blur(2px);
  }
}
// .content > * {
//     font-size: 1em !important;
// }
</style>
