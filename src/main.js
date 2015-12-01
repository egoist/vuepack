import Vue from 'vue'
import VueRouter from 'vue-router'
import Revue from 'revue'
import store from './store'

window.ReduxStore = store
Vue.use(Revue, { store })
Vue.use(VueRouter)
const router = new VueRouter()
router.map({
  '/': {
    component: require('./views/home')
  }
})

router.start(require('./app'), '#app')
