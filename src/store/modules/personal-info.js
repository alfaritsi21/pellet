export default {
  state: {
    showMainProfile: true,
    showPersonalInfo: false,
    showChangePassword: false,
    showChangePin: false
  },
  mutations: {
    setShowMainProfile(state, payload) {
      state.showMainProfile = true
      state.showPersonalInfo = false
      state.showChangePassword = false
      state.showChangePin = false
    },
    setShowPersonalInfo(state, payload) {
      state.showMainProfile = false
      state.showPersonalInfo = true
      state.showChangePassword = false
      state.showChangePin = false
    },
    setShowChangePassword(state, payload) {
      state.showMainProfile = false
      state.showPersonalInfo = false
      state.showChangePassword = true
      state.showChangePin = false
    },
    setShowChangePin(state, payload) {
      state.showMainProfile = false
      state.showPersonalInfo = false
      state.showChangePassword = false
      state.showChangePin = true
    }
  },
  actions: {},
  getters: {
    getShowPersonalInfo(state) {
      return state.showPersonalInfo
    },
    getShowMainProfile(state) {
      return state.showMainProfile
    },
    getShowChangePassword(state) {
      return state.showChangePassword
    },
    getShowChangePin(state) {
      return state.showChangePin
    }
  }
}
