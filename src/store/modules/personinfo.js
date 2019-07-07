import { User } from '@/utils/model.js'
import api from '@/api/index.js'

const state = {
    // TODO: 查看用户参与的课程班级
    personinfo: new User(),
    follow:null,
    fans:null
}

const getters = {
    // presidentName (state) {
    //     return state.corpDetail.presidentName
    // },
}

const actions = {
    async getPersonInfo({commit,state},id){
        const data = await api.getPersonInfo(id);
        commit('setPersonInfo',data)
    },
    async getPersonFollow({commit,state},id){
        const data = await api.getPersonFollowFans(id)
        commit('setPersonFollow',data)
    },
    async getPersonFans({commit,state},id){
        const data = await api.getPersonFollowFans(id)
        commit('setPersonFans',data)
    }
}

const mutations = {
    setPersonInfo(state,props) {
      state.personinfo.email = props.email
      state.personinfo.id = props.user_ID
      state.personinfo.avatar = props.avatar
      state.personinfo.college = props.college
      state.personinfo.name = props.name
      state.personinfo.phone_number = props.phone_number
      state.personinfo.role = props.role
      state.personinfo.follower = props.follower
      state.personinfo.following = props.following
    }


    ,
    setPersonFollow(state,props){
        state.follow = props.follow
    },
    setPersonFans(state,props){
        console.log(props.fans)
        state.fans = props.fans
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
