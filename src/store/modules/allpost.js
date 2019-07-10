
import api from '@/api/index.js'
import { parseAuth } from '@/utils/util.js'

const state = {
}

const getters = {
    // presidentName (state) {
    //     return state.corpDetail.presidentName
    // },
}

const actions = {
    async broadcastStudent({dispatch, commit,state},{ form, person_id} ){
        const res = await api.broadcastStudent(form)
        dispatch('twitter/getUserTwitter', person_id, {root: true})
    },

    async createClass({commit, state}, form){
        const res = await api.createClass(form)

    }

}

const mutations = {

}

export default {
    namespaced: true,//？
    state,
    getters,
    actions,
    mutations
}
