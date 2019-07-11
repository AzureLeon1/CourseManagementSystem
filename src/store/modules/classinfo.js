import api from '@/api/index.js'
import {Class} from '@/utils/model.js'

const state = {
    joinStatus: 0,
    teacherList: '',
    classinfo: new Class(),
    coursewarelist: []

}
const getters = {
    // presidentName (state) {
    //     return state.corpDetail.presidentName
    // },
}


const actions = {
    async getClassInfo({commit, state}, form)
    {
      var data = {}
      if (state.profile.user.role == 'student') {
        data = await api.getClassInfo(form);
      }
      else if (state.profile.user.role == 'teacher_edu') {
        data = await api.getClassInfoForTea(form)
      }
        // console.log(data);
        localStorage.setItem("classinfo",JSON.stringify(data.data.data))
        // console.log(localStorage.getItem("classinfo"));
        // Object.assign(window.localStorage, data.data)
        commit('setClassInfo', data.data.data)


    },

    async join({commit, state, dispatch}, form)
    {
        await api.joinClass(form)
        dispatch('getJoinStatus', form)


    },

    async getJoinStatus({commit, state}, form)
    {

        const status = await api.getJoinStatus(form)
        commit('setJoinStatus', status)
        console.log(status)



    },
    async getCoursewareList({commit, state}, form)
    {
        const data = await api.getCoursewareList(form)
        commit('setCoursewareList', data)

    }
}

const mutations = {
    setClassInfo(state, props)
    {

        state.classinfo = Object.assign({}, state.classinfo, props)
        // console.log(props)
        // console.log(state.classinfo)
        // state.classinfo = Object.assign({}, state.classinfo, props)
    },

    setJoinStatus(state, status){
        const rule = {
            "未加入": 0,
            "待审核": 1,
            "已加入": 2
        }
        state.joinStatus = rule[status]
    },
    setCoursewareList(state, status){
        state.coursewarelist = status
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}






