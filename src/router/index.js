import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/views/Homepage'
import Template from '@/views/Template'
import Coursewarelist from '@/components/Coursewarelist'

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
      path: '/coursewarelist',
      name: 'Coursewarelist',
      component: Coursewarelist

    }
  ]
})
