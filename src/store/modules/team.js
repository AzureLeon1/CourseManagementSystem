import api from '@/api/index.js'

const state = {
    classteamlist:[],
    myownteamlist:[]
}

const getters = {
    getClassteamList(){
      return state.classteamlist;
    },
    getMyteamList(){
      return state.classteamlist;
    }
}

//在actions中提交mutation
const actions = {
  async getClassteam(context, form) {
    // console.log(form);    
    let data = await api.getTeamList(form);
    data=data['data']['data']['teams'];
    // console.log(data);
    context.commit('setClassteam', data)
  },
  async getMyteam(context, form) {
    // console.log(form);
    let data = await api.getMyTeamList(form);
    data=data['data']['data']['teams'];
    console.log("myteams:",data);
    context.commit('setMyteam', data)
  },
  async addTeam(form) {
    // console.log(form);
    let data = await api.addTeam(form);
    // data=data['data']['data']['teams'];
    console.log(data);
    // context.commit('setMyteam', data)
  },
  async joinTeam(form) {
    // console.log(form);
    let data = await api.joinTeam(form);
    // data=data['data']['data']['teams'];
    console.log(data);
    // context.commit('setMyteam', data)
  },
}

//mutation中是存放处理数据方法的集合
const mutations = {
    setClassteam(state, teamlist) {
      // alert("clicked");
      state.classteamlist= teamlist;
      // state.classteamlist.push(teamlist);
      // console.log(state.classteamlist);
    },
    setMyteam(state, teamlist) {
      state.myownteamlist= teamlist;
      // state.myownteamlist.push(teamlist)
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}