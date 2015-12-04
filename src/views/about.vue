<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding-left: 0;
  }
  pre {
    text-align: left;
    overflow: auto;
    padding: 0 10px;
    background-color: #f9f9f9;
  }
</style>

<template>
  <div>
    <pre>
      <code>
npm install -g vuepack
vue init hello-vue
# or if you are located in China
# vue init hello-vue --cn
cd hello-vue
npm run dev
# wait for webpack to bundle then go to http://localhost:3030
# use `Ctrl+H` to toggle Redux Dev Panel
      </code>
    </pre>
    <label for="">Your name</label>
    <input type="text" v-model="name" @keydown.enter="addUser" placeholder="Press Enter">
    <p>
      VuePack users:
    </p>
    <ul>
      <li v-for="user in users" track-by="$index">
        <a href="https://github.com/{{ user }}">{{ user }}</a>
      </li>
    </ul>
  </div>
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
        if (this.name) {
          this.$revue.dispatch({ type: 'ADD_USER', name: this.name })
          this.name = ''
        }
      }
    }
  }
</script>
