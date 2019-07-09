import api from '@/api/index.js'
import { parseAuth } from '@/utils/util.js'

const state = {
    classattendancelist:[]
}

const getters = {
}

const actions = {
  async getAttendance({commit, state}, id) {
    // 暂时没有用到id
    const data = await api.getAttendance()
    commit('setAttendance', data)
  },
}

const mutations = {
    setAttendance(state, props) {
      state.classattendancelist = []
      state.classattendancelist.push(...props.attendancelist)
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
