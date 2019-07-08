import api from '@/api/index.js'

const state = {
    Items:[],
}

const getters = {

}

const actions = {
    async getClassListItem({commit, state}){
        const data = await api.getClassListItems();
        commit('setItemsInfo', data)
    }
}
const mutations = {
    setItemsInfo(state, props) {
        state.Items = []
        state.Items.push(...props)
    }
}

export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}



