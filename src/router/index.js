import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/views/Homepage'
import Template from '@/views/Template'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Team from '@/views/Team'
import Attendance from '@/views/Attendance'

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
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/team',
      name: 'Team',
      component: Team,
    },
    {
      path: '/attendance',
      name: 'Attendance',
      component: Attendance,
    }
  ]
})
