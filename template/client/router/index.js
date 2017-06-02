import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import NotFound from '../views/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
})
