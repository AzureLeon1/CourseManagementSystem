import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/views/Homepage'
import Template from '@/views/Template'
import Courseware from '@/views/Courseware'
import MessageHome from '@/views/MessageHome'
import CourseMessage from '@/views/CourseMessage'
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
import CourseTable from '@/views/CourseTable'
// import TimeTable from '@/components/TimeTable'
import UserProfile from '@/views/UserProfile'
import Friends from '@/views/Friends'
import MyClass from '@/views/MyClass'
import Discussion from '@/views/Discussion'
import SearchUser from '@/views/SearchUser'
import Twitter from '@/views/Twitter'
import GlobalClass from '@/views/GlobalClass'
import ClassDetail from '@/views/ClassDetail'
import ClassHome from '@/views/ClassHome'
import MembershipAudit from '@/views/MembershipAudit'
import Summary from '@/views/Summary'

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
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
      path: '/courseview',
      name: 'Courseview',
      component: Courseview
    },
    {
      path:'/messageHome',
      name:'MessageHome',
      component: MessageHome
    },
    {
      path:'/coursemessage',
      name:'CourseMessage',
      component: CourseMessage
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
    },
    {
      path: '/globalclass',
      name: 'GlobalClass',
      component: GlobalClass

    },
    {
      path: '/classdetail',
      name: 'ClassDetail',
      component: ClassDetail
    },
    // {
    //   path: 'createform',
    //   name: 'CreateForm',
    //   component: CreateForm,
    // },
    {
      path: '/class_home/:course_id',
      name: 'ClassHome',
      component: ClassHome,
      props: true,
    },
    {
      path: '/class_home/:class_id/courseware',
      name: 'Courseware',
      component: Courseware
    },
    {
      path: '/class_home/:class_id/exams',
      name: 'Exam',
      component: Exam,
    },
    {
      path: '/class_home/:class_id/newExam',
      name: 'NewExam',
      component: NewExam,
    },
    {
      path: '/class_home/:class_id/answerExam/:exam_id',
      name: 'AnswerExam',
      component: AnswerExam,
      props: true
    },
    {
      path: '/class_home/:class_id/checkExam/:exam_id',
      name: 'CheckExam',
      component: CheckExam,
      props: true
    },
    {
      path: '/class_home/:class_id/examDetail/:exam_id',
      name: 'ExamDetail',
      component: ExamDetail,
    },
    {
      path: '/class_home/:class_id/questionBank',
      name: 'QuestionBank',
      component: QuestionBank
    },
    {
      path: '/class_home/:class_id/team',
      name: 'Team',
      component: Team,
    },
    {
      path: '/class_home/:class_id/discussion',
      name: 'Discussion',
      component: Discussion
    },
    {
      path: '/class_home/:class_id/attendance',
      name: 'Attendance',
      component: Attendance,
    },
    {
      path: '/class_home/:class_id/membershipAudit',
      name: 'MembershipAudit',
      component: MembershipAudit,
      props: true,
    },
    {
      path: '/summary',
      name: 'Summary',
      component: Summary
    },
  ]
})
