export default {
  state: {
    showDashboard: true,
    showTransfer: false,
    showTopup: false,
    showProfile: false
  },
  mutations: {
    setShowDashboard(state, payload) {
      state.showDashboard = true
      state.showTransfer = false
      state.showTopup = false
      state.showProfile = false
    },
    setShowTransfer(state, payload) {
      state.showDashboard = false
      state.showTransfer = true
      state.showTopup = false
      state.showProfile = false
    },
    setShowTopup(state, payload) {
      state.showDashboard = false
      state.showTransfer = false
      state.showTopup = true
      state.showProfile = false
    },
    setShowProfile(state, payload) {
      state.showDashboard = false
      state.showTransfer = false
      state.showTopup = false
      state.showProfile = true
    }
  },
  actions: {},
  getters: {
    getshowDashboard(state) {
      return state.showDashboard
    },
    getShowTransfer(state) {
      return state.showTransfer
    },
    getshowTopup(state) {
      return state.showTopup
    },
    getshowProfile(state) {
      return state.showProfile
    }
  }
}
