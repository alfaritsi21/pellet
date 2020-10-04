import axios from 'axios'

export default {
  state: {
    showMainProfile: true,
    showPersonalInfo: false,
    showChangePassword: false,
    showChangePin: false,
    user_img: ''
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
    },
    setUserById(state, payload) {
      // console.log(payload.data[0].user_img)
      state.user_img = payload.data.user_img
    }
  },
  actions: {
    getUserById(context, payload) {
      axios
        .get(`${process.env.VUE_APP_URL}profile/${payload}`)
        .then(response => {
          console.log(response.data)
          context.commit('setUserById', response.data)
          // context.state.products = response.data.data
          // context.state.totalData = response.data.pagination.totalData
          // context.commit('changePage', response.data.pagination.page)
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    patchImage(context, payload) {
      console.log(payload.user_id)
      console.log(payload.form)
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_URL}profile/image/${payload.user_id}`,
            payload.form
          )
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
            console.log(error)
          })
      })
    },
    patchProfile(context, payload) {
      console.log(payload.user_id)
      console.log(payload.form)
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_URL}profile/patch/${payload.user_id}`,
            payload.form
          )
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
            console.log(error)
          })
      })
    },
    changePassword(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_URL}user/newpass/${payload[0]}`,
            payload[1]
          )
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    }
  },
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
    },
    getUserImg(state) {
      return state.user_img
    }
  }
}
