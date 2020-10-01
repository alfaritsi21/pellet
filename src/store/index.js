import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu'
import transfer from './modules/transfer'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    menu,
    transfer
  },
  getters: {},
  plugins: [
    createPersistedState({
      paths: ['Auth.user', 'Auth.urlApi'],
      storage: window.sessionStorage
    })
  ]
})
