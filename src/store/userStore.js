import {PersistStore} from 'common-mpvue'
import {user} from '../api'

const userStore = new PersistStore('userStatus', {
  state: {
    userStatus: {
      id: '',
      type: '',
      member: ''
    }
  },
  getters: {
    getUserId(state) {
      return state.userStatus.id
    },
    getMember(state) {
      return state.userStatus.member
    },
    getType(state) {
      return state.userStatus.type
    }
  },
  mutations: {
    setUserStatus(state, userStatus) {
      state.userStatus.id = userStatus.id
      state.userStatus.member = userStatus.member
      state.userStatus.type = userStatus.type
    }
  },
  actions: {
    userStatus(store) {
      wx.login({
        success: res => {
          user.getUserStatus({
            code: res.code
          }).then(res => {
            store.commit('setUserStatus', res.data)
          })
        }
      })
    }
  }
})

export default userStore
