import { User, CorpDetail } from '@/utils/model.js'
import api from '@/api/index.js'
import { parseAuth } from '@/utils/util.js'

const state = {
    user: new User(),
    // corp: new CorpDetail(),
    role: window.localStorage.role,
    joinedclasslist:[],
    checkingclasslist:[]
}

const getters = {

}

const actions = {
    // TODO: 获取班级的profile也在这个文件里做
    // async getCorpProfile ({ commit, state },club_id) {
    //     const data = await api.getClubInfo(club_id)
    //     data.auths = parseAuth(data.auths)
    //     console.log('club_info of ', data)

    //     commit('setCorp', data)
    // },
    async getAuthority ({ commit, state }, form) {
        console.log(form);
        // TODO: 使用真实的api
        const {token, user_name: name, user_id: id, role, avatar, department: college, follower, following, email, phone_number} = await api.getAuthority(form)
        console.log(name);
        Object.assign(window.localStorage, {
            token,
            name,
            role,
            avatar,
            id,
            college,
            follower,
            following,
            email,
            phone_number
        })
        commit('setUser', {
            token,
            name,
            role,
            avatar,
            id,
            college,
            follower,
            following,
            email,
            phone_number
        })
        commit('setRole',window.localStorage.role)
        window.vm.$router.push({ name: 'Homepage'});
    },
    async register ({ commit, state }, form) {
        const res = await api.register(form)
        if (parseInt(res.code) === 200) {
            window.vm.$router.push({ name: 'Login' })
        }
    },
    async logout ({ commit, state }) {
      console.log("test");
        localStorage.clear()
        commit('clearUser')
        window.vm.$router.push({ name: 'Login' });
    },
    async getPersonInfo({commit,state}){
      const data = await api.getPersonInfo(state.user.id);
      Object.assign(window.localStorage, data.data)
      data.name = data.user_name
      data.id = data.user_id
      data.college = data.department
      commit('setUser',data)
    },

    async getFollowInfo({commit, state}){
      const res = await api.getFollowCount()
      console.log("followinfo", res)
      commit('setFollowInfo',res)
    },

    async getClassList({commit, state}, user_id)
    {
       const classes = await api.getjoinedClassList(user_id)
       commit('setjoinedClassList', classes)

    },

    async getCheckingClassList({commit, state}, user_id)
    {
        const checkingclasses = await api.getCheckingClassList(user_id)
        console.log('这是待审核的班级', checkingclasses)
        commit('setcheckingclasslist', checkingclasses)
        
    }



}

const mutations = {
    // setCorpProfile (state, )
    setUser (state, props) {
        state.user = Object.assign({}, state.user, props)
        console.log('wlnb',state.user)
    },
    clearUser (state) {
        state.user = new User()
    },
    // setCorp (state, props) {
    //     state.corp = Object.assign({}, state.corp, props)
    // },
    setRole(state,props){
        state.role = props
    },
    setFollowInfo(state,props) {
      state.user.follower = props.follower
      state.user.following = props.following
      console.log("state.user", state.user)
    },

    setjoinedClassList(state, props){
        state.joinedclasslist = []
        state.joinedclasslist.push(...props)
        //console.log('这是Joinedclasslist', state.joinedclasslist)

    },
    setcheckingclasslist(state, props){
        state.checkingclasslist = []
        state.checkingclasslist.push(...props)
        console.log('这是待审核的班级',state.checkingclasslist)

    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
