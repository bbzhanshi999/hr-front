import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '@/views/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    }
  ]
})
