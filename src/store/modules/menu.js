export default {
  state: {
    showDashboard: true,
    showTransfer: false,
    showTopup: false,
    showProfile: false,
    showTransaction: false
  },
  mutations: {
    setShowDashboard(state, payload) {
      state.showDashboard = true
      state.showTransfer = false
      state.showTopup = false
      state.showProfile = false
      state.showTransaction = false
    },
    setShowTransfer(state, payload) {
      state.showDashboard = false
      state.showTransfer = true
      state.showTopup = false
      state.showProfile = false
      state.showTransaction = false
    },
    setShowTopup(state, payload) {
      state.showDashboard = false
      state.showTransfer = false
      state.showTopup = true
      state.showProfile = false
      state.showTransaction = false
    },
    setShowProfile(state, payload) {
      state.showDashboard = false
      state.showTransfer = false
      state.showTopup = false
      state.showProfile = true
      state.showTransaction = false
    },
    setShowTransaction(state, payload) {
      state.showDashboard = false
      state.showTransfer = false
      state.showTopup = false
      state.showProfile = false
      state.showTransaction = true
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
    },
    getshowTransaction(state) {
      return state.showTransaction
    }
  }
}
