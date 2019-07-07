import Vue from 'vue'
import Vuex from 'vuex'
import profile from './modules/profile.js'
import personinfo from './modules/personinfo.js'
import allpatch from './modules/allpatch.js'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    profile,
    personinfo,
    classlistitem,
    allpatch
  },
  strict: debug
})
