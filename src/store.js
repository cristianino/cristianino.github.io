import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    app: {
      title: 'Cristian Niño DevOp'
    },
    userInfo: {
      state: false,
      data: null
    },
    firebaseConfig: null
  },
  mutations: {

  },
  actions: {

  }
})
