
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
    //删除一条twitter
    async deletePost({commit,state, dispatch},{ id, person_id }){
        const res = await api.deletePost(id)
        if(person_id !== null)
            dispatch('twitter/getUserTwitter', person_id, {root: true})
    },

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
