import axios from 'axios'
export default {
  state: {
    urlApi: process.env.VUE_APP_URL,
    isSelect: false,
    isContinue: false,
    showUserData: {},
    receiverData: {}
  },
  mutations: {
    setIsSelect(state, payload) {
      state.isSelect = payload
    },
    setIsContinue(state, payload) {
      state.isContinue = payload
    },
    setShowUser(state, payload) {
      state.showUserData = payload
    },
    setReceiverData(state, payload) {
      state.receiverData = payload
    }
  },
  actions: {
    transfer(context, payload) {
      const form = {
        user_id: payload[0],
        target_id: payload[1],
        tf_nominal: payload[2],
        tf_desc: payload[3]
      }
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.urlApi}transfer`, form)
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
    selectReceiverData(context, payload) {
      context.commit('setReceiverData', payload)
    },
    showUser(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${context.state.urlApi}profile`)
          .then(response => {
            resolve(response.data)
            context.commit('setShowUser', response.data.data)
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
    throwSelectTrigger(context, payload) {
      context.commit('setIsSelect', payload)
    },
    throwContinue(context, payload) {
      context.commit('setIsContinue', payload)
    }
  },
  getters: {
    isSelect(state) {
      return state.isSelect
    },
    isContinue(state) {
      return state.isContinue
    },
    showUserData(state) {
      return state.showUserData
    },
    getReceiverData(state) {
      return state.receiverData
    }
  }
}
