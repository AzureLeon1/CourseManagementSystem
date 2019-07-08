import api from '@/api/index.js'

const state = {
  SearchResult: [],
}

const getters = {

}

const actions = {
  async getUserListItem({commit, state}, search_name) {
    const data = await api.getSearchResult(search_name);
    commit('setSearchResult', data)
  }
}
const mutations = {
  setSearchResult(state, props) {
    state.SearchResult = []
    state.SearchResult.push(...props)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
