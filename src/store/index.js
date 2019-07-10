import Vue from 'vue'
import Vuex from 'vuex'
import profile from './modules/profile.js'
import personinfo from './modules/personinfo.js'
import allput from './modules/allput.js'
import classlistitem from './modules/classlistitem.js'
import twitter from './modules/twitter.js'
import alldelete from './modules/alldelete.js'
import allpost from './modules/allpost.js'
import exam from './modules/exam.js'
import team from './modules/team.js'
import attendance from './modules/attendance.js'
import classinfo from './modules/classinfo.js'


import userlistitem from './modules/userlistitem.js'
import coursetable from './modules/coursetable.js'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    profile,
    personinfo,
    classlistitem,
    allput,
    twitter,
    alldelete,
    allpost,
    exam,
    team,
    attendance,
    classinfo,
    userlistitem,
    coursetable,
  },
  strict: debug
})
