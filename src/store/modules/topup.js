import axios from 'axios'
export default {
  state: {
    urlApi: process.env.VUE_APP_URL
  },
  mutations: {},
  actions: {
    topup(context, payload) {
      const form = {
        user_id: payload[2].user_id,
        user_phone: payload[2].user_phone,
        nominal: payload[1]
      }
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.urlApi}topup`, form)
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            if (error.response === undefined) {
              alert('Tidak dapat terhubung ke server')
            } else {
              reject(error.response)
            }
          })
      })
    },
    cekPin(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${context.state.urlApi}profile/${payload}`)
          .then(response => {
            resolve(response.data.data[0].user_pin)
          })
          .catch(error => {
            if (error.response === undefined) {
              alert('Tidak dapat terhubung ke server')
            } else {
              reject(error.response)
            }
          })
      })
    }
  },
  getters: {
    // isLogin(state) {
    //   return state.token !== null
    // }
  }
}
