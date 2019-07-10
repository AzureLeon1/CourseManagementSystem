import { User } from '@/utils/model.js'
import api from '@/api/index.js'

const state = {
    // TODO: 查看用户参与的课程班级
    personinfo: new User(),
    follow:null,
    fans:null,

}

const getters = {
    // presidentName (state) {
    //     return state.corpDetail.presidentName
    // },
}

const actions = {
    async getPersonInfo({commit,state},id){
        const data = await api.getPersonInfo(id);
        data.name = data.user_name
        data.id = data.user_id
        data.college = data.student
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
      state.personinfo.id = props.user_id
      state.personinfo.avatar = props.avatar
      state.personinfo.college = props.department
      state.personinfo.name = props.user_name
      state.personinfo.phone_number = props.phone_number
      state.personinfo.role = props.role
      state.personinfo.grade = props.grade
      state.personinfo.job_title = props.job_title
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
