import api from '@/api/index.js'

const state = {
    classteamlist:[],
    myownteamlist:[]
}

const getters = {}

//在actions中提交mutation
const actions = {
  async getTeam({commit, state}, id) {
    const data = await api.getTeam()
    commit('setTeam', data)
  },
}

//mutation中是存放处理数据方法的集合
const mutations = {
    setTeam(state, props) {
      state.classteamlist= []
      state.classteamlist.push(...props.teamlist)
      state.myownteamlist=[]
      state.myownteamlist.push(...props.myteamlist)
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}