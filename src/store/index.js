import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu'
import PersonalInfo from './modules/personal-info'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    menu,
    PersonalInfo
  },
  getters: {},
  plugins: [
    createPersistedState({
      paths: ['Auth.user', 'Auth.urlApi'],
      storage: window.sessionStorage
    })
  ]
})
