import api from '@/api/index.js'
import {
  parseAuth
} from '@/utils/util.js'

const state = {
  myTwitterItems: [],
  friendTwitterItems: [],
  mergedTwitterItems: [],
  followPeopleItems: [],
  followerItems: [],
}

const getters = {}

const actions = {
  async getUserTwitter({
    commit,
    state
  }, id) {
    // 暂时没有用到id
    const data = await api.getUserTwitter()
    console.log(data);
    commit('setuserTwitterItems', data)
  },
  async getFollowing({
    commit,
    state
  }, id) { //获取我关注的用户
    const followings = await api.getFollowing(id);
    console.log(followings);
    commit('setfollowPeopleItems', followings)
  },
  async getFollowers({
    commit,
    state
  }, id) { //获取关注我的用户
    const followers = await api.getFollowers(id);
    commit('setFollowerItems', followers)
  },
  // 关注用户
  async followUser({
    commit,
    state,
    dispatch
  }, {
    id,
    user
  }) {
    await api.followPerson(id)
    dispatch('getUserFollow', user)
  },
  // 取关用户
  async unfollowUser({
    commit,
    state,
    dispatch
  }, {
    id,
    user
  }) {
    await api.deleteFollowPerson(id)
    dispatch('getUserFollow', user)
    dispatch('profile/getFollowInfo', null, {root: true})
  },
  async getUserFollow({
    commit,
    state,
    dispatch
  }, id) { //获取关注的用户
    const following = await api.getFollowing(id);
    commit('setfollowPeopleItems', following)
    dispatch('profile/getFollowInfo', null, {root: true})
  },
}

const mutations = {
  setuserTwitterItems(state, props) {
    // state.myTwitterItems = []
    // state.myTwitterItems.push(...props.my_twitters)
    // state.friendTwitterItems = []
    // state.friendTwitterItems.push(...props.friend_twitters)
    // state.mergedTwitterItems = []
    // state.mergedTwitterItems = state.myTwitterItems.concat(state.friendTwitterItems)
    state.mergedTwitterItems = []
    console.log(props);
    function compare(obj1, obj2) {
      var value1 = parseInt(obj1.time.slice(-5).slice(0,2) + obj1.time.slice(-5).slice(-2))
      var value2 = parseInt(obj2.time.slice(-5).slice(0,2) + obj2.time.slice(-5).slice(-2))
      return value2-value1
    }
    props.sort( compare )
    state.mergedTwitterItems.push(...props)
  },
  setfollowPeopleItems(state, props) {
    state.followPeopleItems = []
    state.followPeopleItems.push(...props)
  },
  setFollowerItems(state, props) {
    state.followerItems = []
    state.followerItems.push(...props)
  },

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
