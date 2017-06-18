<template>
  <div class="post">
<h6>{{source}}</h6>
<i class="fa fa-arrow-circle-o-left fa-3x" aria-hidden="true"  @click="$router.push('/')"></i>
    <!-- <button type="button" name="button" class="btn-rasied" @click="$router.push('/')"></button> -->
    <transition name="fade" mode="out-in">
      <div :key="$route.params.slug">
        <h3 v-html="title"></h3>
        <div v-html="content"></div>
        <!-- <vue-editor v-model="post.content"></vue-editor> -->
      </div>
    </transition>
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

</style>
