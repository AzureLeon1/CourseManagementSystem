import { User, CorpDetail } from '@/utils/model.js'
import api from '@/api/index.js'
import { parseAuth } from '@/utils/util.js'

const state = {
    user: new User(),
    // corp: new CorpDetail(),
    role: window.localStorage.role
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
        api.getMockAuthority(form)
          .then(data => console.log(data))
        const {token, name, user_ID: id, role, avatar, college, follower, following, email, phone_number} = await api.getMockAuthority(form)
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
      commit('setUser',data.data)
    },

}

const mutations = {
    // setCorpProfile (state, )
    setUser (state, props) {
        state.user = Object.assign({}, state.user, props)
    },
    clearUser (state) {
        state.user = new User()
    },
    // setCorp (state, props) {
    //     state.corp = Object.assign({}, state.corp, props)
    // },
    setRole(state,props){
        state.role = props
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
