import api from '@/api/index.js'
import { parseAuth } from '@/utils/util.js'
import { STATUS_CODES } from 'http';
import { changeRole } from "../../utils/util"

const state = {
    basicItems:[],
    basicproblemItems:[],
    DiscussionItems:[],
    ReplyItems:[],
}

const getters = {
}

const actions = {
  async getAllDiscussions({commit, state}, form) {
    const data = await api.getCourseDiscussion(form)
    for (let q of data.questions) {
      q.role = changeRole(q.role)
    }
    commit('setDiscussionItems', data.questions)
  },

  async getDiscussionReply({commit,state},id){
    //id为查看问题的discussion_id
    const data=await api.getQuestionReply(id)
    commit('setReplyItems',data.data.reply)
  }
}

const mutations = {
    setDiscussionItems (state, props) {
     // state.basicItems=[]
     // state.basicItems.push(...props.basic)
      //state.DiscussionItems = []
      state.DiscussionItems = props
    },

    setReplyItems(state, props) {
     // state.basicproblemItems=[]
    //  state.basicproblemItems.push(...props.basic)
     // state.ReplyItems=[]
      state.ReplyItems.push = props.reply
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}