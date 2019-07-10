import api from '@/api/index.js'
import { parseAuth } from '@/utils/util.js'

const state = {
    myCourselist:[]
}

const getters = {
}

const actions = {
  async getCoursetable({commit, state}, id) {
    // 暂时没有用到id
    const data = await api.getCoursetable()
    commit('setCourselist', data)
  },
}

const mutations = {
    setCourselist(state, props) {
      state.myCourselist = []
      state.myCourselist.push(...props.courselist)
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
