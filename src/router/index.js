import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/views/Homepage'
import Template from '@/views/Template'
import MessageHome from '@/views/MessageHome'
import Login from '@/views/Login'
import Register from '@/views/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
    },
    {
      path: '/template',
      name: 'Template',
      component: Template
    },
    {
      path:'/messageHome',
      name:'MessageHome',
      component: MessageHome
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
