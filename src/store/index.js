import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu'
import Auth from './modules/Auth'
import transfer from './modules/transfer'
import PersonalInfo from './modules/personal-info'
import Topup from './modules/topup'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    menu,
    transfer,
    Auth,
    PersonalInfo,
    Topup
  },
  getters: {},
  plugins: [
    createPersistedState({
      paths: ['Auth.user', 'Auth.isLogin'],
      storage: window.sessionStorage
    })
  ]
})
