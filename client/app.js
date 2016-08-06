import Vue from 'vue'
import {sync} from 'vue-router-sync'
import App from './App.vue'
import router from './router'
import store from './store'

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

export {app, router, store}