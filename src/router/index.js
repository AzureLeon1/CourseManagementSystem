import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/views/Homepage'
import Template from '@/views/Template'
import Courseware from '@/views/Courseware'
import MessageHome from '@/views/MessageHome'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Team from '@/views/Team'
import Attendance from '@/views/Attendance'
import Exam from '@/views/Exam'
import AnswerExam from '@/views/AnswerExam'
import CheckExam from '@/views/CheckExam'
import NewExam from '@/views/NewExam'
import ExamDetail from '@/views/ExamDetail'
import QuestionBank from '@/views/QuestionBank'
import Courseview from '@/views/Courseview'
import CourseTable from '@/components/CourseTable'
import UserProfile from '@/views/UserProfile'
import Friends from '@/views/Friends'
import MyClass from '@/views/MyClass'
import SearchUser from '@/views/SearchUser'
import Twitter from '@/views/Twitter'

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
      component: QuestionBank
    },
    {
      path: '/courseview',
      name: 'Courseview',
      component: Courseview
    },
    {
      path: '/courseware',
      name: 'Courseware',
      component: Courseware
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
    },
    {
      path: '/frineds',
      name: 'Friends',
      component: Friends
    },
    {
      path: '/myclass',
      name: 'MyClass',
      component: MyClass
    },
    {
      path: '/searchUser',
      name: 'SearchUser',
      component: SearchUser
    },
    {
      path: '/twitter',
      name: 'Twitter',
      component: Twitter
    }
  ]
})
