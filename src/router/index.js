import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/views/Homepage'
import Template from '@/views/Template'
import Courseware from '@/views/Courseware'
import MessageHome from '@/views/MessageHome'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Courseview from '@/views/Courseview'
import CourseTable from '@/components/CourseTable'
import UserProfile from '@/views/UserProfile'

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
      path: '/courseware',
      name: 'Courseware',
      component: Courseware
    },
    {
      path:'/MessageHome',
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
    },
  {
    path: '/courseview',
    name: 'courseview',
    component: Courseview
  },
  {
    path: '/coursetable',
    name: 'CourseTable',
    component: CourseTable
  },
  {
      path: '/user_profile/:person_id',
      name: 'UserProfile',
      component: UserProfile,
      props: true
    }
  ]
})
