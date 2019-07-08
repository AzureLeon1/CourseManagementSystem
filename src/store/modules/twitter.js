import api from '@/api/index.js'
import { parseAuth } from '@/utils/util.js'

const state = {
    myTwitterItems:[],
    friendTwitterItems: [],
    mergedTwitterItems: [],
}

const getters = {
}

const actions = {
  async getUserTwitter({commit, state}, id) {
    // 暂时没有用到id
    const data = await api.getUserTwitter()
    commit('setuserTwitterItems', data)
  },
}

const mutations = {
    setuserTwitterItems (state, props) {
      state.myTwitterItems = []
      state.myTwitterItems.push(...props.my_twitters)
      state.friendTwitterItems = []
      state.friendTwitterItems.push(...props.friend_twitters)
      state.mergedTwitterItems = []
      state.mergedTwitterItems = state.myTwitterItems.concat(state.friendTwitterItems)
  },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
