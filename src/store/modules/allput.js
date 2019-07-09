import api from '@/api/index.js'

const state = {
}

const getters = {
    // presidentName (state) {
    //     return state.corpDetail.presidentName
    // },
}

const actions = {
    async changeUserInfo({commit,state, dispatch }, param){
      const res = await api.changeUserInfo(param.id, param.form)
      dispatch('profile/getPersonInfo', null, {root: true})
      dispatch('personinfo/getPersonInfo', localStorage.id, {root: true})

    },
    // TODO: 修改广播信息？
    // async changeActivityInfo({commit,state},form){
    //     const res = await api.changeActivityInfo(form)
    // },
    // TODO: 修改审核状态？
    // async changeApplyStatus({commit,state},form){
    //     const res = await api.changeApplyStatus(form)
    // },

}

const mutations = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
