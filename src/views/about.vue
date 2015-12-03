<style scoped>
  ul {
    list-style: none;
  }
</style>

<template>
  <a v-link="{path: '/'}">Home</a>
  <label for="">Your name</label>
  <input type="text" v-model="name" @keydown.enter="addUser" placeholder="Press Enter">
  <p>
    VuePack users:
  </p>
  <ul>
    <li v-for="user in users" track-by="$index">{{ user }}</li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        name: '',
        users: this.$revue.getState().users
      }
    },
    ready () {
      this.$subscribe('users')
    },
    methods: {
      addUser () {
        if (!this.name)
          return
        this.$revue.dispatch({type: 'ADD_USER', name: this.name})
        this.name = ''
      }
    }
  }
</script>
