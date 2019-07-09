// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import http from 'axios'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import '../static/css/theme/index.css'
import store from './store'
import animate from 'animate.css'

Vue.config.productionTip = false

Vue.prototype.$axios = http
Vue.use(ElementUI)

const {
  token,
  name,
  role,
  avatar,
  id,
  college,
  follower,
  following,
  email,
  phone_number
} = window.localStorage
store.commit('profile/setUser', {
  token,
  name,
  role,
  avatar,
  id,
  college,
  follower,
  following,
  email,
  phone_number
})

/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
