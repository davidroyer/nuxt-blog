<template>
  <div>
    <header class="container bg--teal">
      <h1 class="siteTitle m--1 g--4" @click="$router.push('/')">NuxtBlog</h1>
      <!-- <h2 class="subtitle">Nuxt + Firebae = SSR or Static Site</h2> -->
    </header>
    <nuxt/>
  </div>
</template>

<style lang="scss">

body {
  display: block;
  // background: url('~static/blog-svg.svg') repeat-y 50% 0;
  // background-size: 100vw;
}

.siteTitle {
  width: 100%;
  font-weight: 900;
  cursor: pointer;
}
.container {
  padding: 1em 1.5em;

  @media (min-width: 901px) {
    padding: 1em 4em;
  }
}

.backNavigation {
  // background: #4d4d4d;
  background: #4d4d4d;
  border-radius: 50%;
  padding: .25em;
  width: 42px;
  height: 42px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.12), 0 2px 10px 0 rgba(0, 0, 0, 0.32);
  position: fixed;
  bottom: 20px;
  z-index: 9999;
  left: 20px;
  svg {
    fill: white;
  }
}
header {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 0;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.12), 0 2px 10px 0 rgba(0, 0, 0, 0.09);

  @media (min-width: 901px) {
    padding: 1em 1.5em !important;
  }
  padding-left: 1em 4em;

  // &:before {
  //   content: '';
  //   position: absolute;
  //   left: 0;
  //   right: 0;
  //   top: 0;
  //   height: 100vw;
  //   // background: url(//firebase.google.com/images/backslant-sub-top.svg) no-repeat 50% 0/100%;
  //   background-size: 100%;
  //   margin-top: -200px;
  //   background: url('~static/blog-top-svg.svg');
  // }

  .siteTitle {
    margin: 0;
    margin-bottom: .25em;

  }
}
.subtitle {
  margin-top: 0;
      color: hsla(0, 0%, 14%, 0.7);
      font-weight: bold;
      margin: 0;
      font-size: 1.5em;
      font-style: normal;
      letter-spacing: -1px;
}

html
{
  /*font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;*/
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}

h2 {
  font-size: 40px;
  font-family: 'Roboto';
  margin-bottom: .5em;
  text-align: center;
  font-weight: 400;
  letter-spacing: -1px;
  position: absolute;
  background: rgba(41, 41, 41, 0.50);
  color: #ffffff;
  width: 100%;
  left: 0;
  box-sizing: border-box;
  right: 0;
  padding: .5em;
  transition: .25s ease;
  border-bottom: 2px solid transparent;
  text-shadow: 2px 2px rgba(255, 0, 0, 0);

  &:hover, &:focus {
    border-bottom: 2px solid white;
    font-weight: 500;
    text-shadow: 2px 2px #282828;
  }
}

/*.button--green
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
.button--green:hover
{
  color: #fff;
  background-color: #3b8070;
}
.button--grey
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover
{
  color: #fff;
  background-color: #35495e;
}*/
</style>
