<style src="./css/shared.css"></style>
<style src="./css/app.css"></style>

<template>
  <div id="app">
    <star></star>
    <h1>VuePack</h1>
    <nav>
      <a v-link="{path: '/'}">Home</a>
      <a v-link="{path: '/about'}">About</a>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    components: {
      star: require('./components/star')
    }
  }
</script>
