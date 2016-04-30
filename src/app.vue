<style src="./css/shared.css"></style>

<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import store from './vuex/store'

  export default {
    store
  }
</script>
