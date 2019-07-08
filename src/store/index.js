import Vue from 'vue'
import Vuex from 'vuex'
import profile from './modules/profile.js'
import personinfo from './modules/personinfo.js'
import allpatch from './modules/allpatch.js'
import classlistitem from './modules/classlistitem.js'
import twitter from './modules/twitter.js'
import alldelete from './modules/alldelete.js'
import allpost from './modules/allpost.js'
import exam from './modules/exam.js'
import classinfo from './modules/classinfo.js'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    profile,
    personinfo,
    classlistitem,
    allpatch,
    twitter,
    alldelete,
    allpost,
    exam,
    classinfo
  },
  strict: debug
})
