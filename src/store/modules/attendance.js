import api from '@/api/index.js'
import { parseAuth } from '@/utils/util.js'

const state = {
    classattendancelist:[]
}

const getters = {
}

const actions = {
  async getAttendance({commit, state}, form) {
    // 暂时没有用到id
    const data = await api.getAttendance(form)
    commit('setAttendance', data)
  },
}

const mutations = {
    setAttendance(state, props) {
      state.classattendancelist = []
      state.classattendancelist.push(...props.class_attendance)
      console.log(state.classattendancelist);
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
