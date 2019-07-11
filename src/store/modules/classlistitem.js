import api from '@/api/index.js'

const state = {
    Items:[],
    clickedclass : {
        course_id: null,
        sec_id: null,
        semester: null,
        year: null,
    }
}

const getters = {

}

const actions = {
    async getClassListItem({commit, state}){
        const data = await api.getClassListItems();
        console.log(data);
        commit('setItemsInfo', data)
    },

    async getclickclass({commit, state}, form)
    {
      
      console.log(form)
      commit('setclickedclass',form)


    }
}
const mutations = {
    setItemsInfo(state, props) {
        state.Items = []
        state.Items.push(...props)
    },
    setclickedclass(state, props)
    {
        state.clickedclass.course_id = props.course_id;
        state.clickedclass.sec_id = props.sec_id;
        state.clickedclass.semester = props.semester;
        state.clickedclass.year = props.year;

    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}



