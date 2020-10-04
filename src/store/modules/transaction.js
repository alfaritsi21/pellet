import axios from 'axios'
export default {
  state: {
    urlApi: process.env.VUE_APP_URL,
    weeklyHistory: {},
    monthlyHistory: {},
    dailyHistory: {}
  },
  mutations: {
    setWeeklyHistory(state, payload) {
      state.weeklyHistory = payload
    },
    setMonthlyHistory(state, payload) {
      state.monthlyHistory = payload
    },
    setDailyHistory(state, payload) {
      state.dailyHistory = payload
    }
  },
  actions: {
    weeklyHistory(context, payload) {
      const n = new Date()
      n.setDate(n.getDate() + 1)
      const now = n.toISOString().slice(0, 10)

      const d = new Date()
      d.setDate(d.getDate() - 7)
      const date = d.toISOString().slice(0, 10)

      const form = {
        user_id: payload,
        date_from: date,
        date_to: now
      }
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.urlApi}transaction/history`, form)
          .then(response => {
            resolve(response.data)
            context.commit('setWeeklyHistory', response.data.data)
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
    monthlyHistory(context, payload) {
      const n = new Date()
      n.setDate(n.getDate() + 1)
      const now = n.toISOString().slice(0, 10)

      const d = new Date()
      d.setDate(d.getDate() - 30)
      const date = d.toISOString().slice(0, 10)

      const form = {
        user_id: payload,
        date_from: date,
        date_to: now
      }
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.urlApi}transaction/history`, form)
          .then(response => {
            resolve(response.data)
            context.commit('setMonthlyHistory', response.data.data)
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
    dailyHistory(context, payload) {
      const n = new Date()
      n.setDate(n.getDate() + 1)
      const now = n.toISOString().slice(0, 10)

      const d = new Date()
      d.setDate(d.getDate() - 1)
      const date = d.toISOString().slice(0, 10)

      const form = {
        user_id: payload,
        date_from: date,
        date_to: now
      }
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.urlApi}transaction/history`, form)
          .then(response => {
            resolve(response.data)
            context.commit('setDailyHistory', response.data.data)
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
    getHistory(state) {
      return state.weeklyHistory
    },
    getMonthlyHistory(state) {
      return state.monthlyHistory
    },
    getDailyHistory(state) {
      return state.dailyHistory
    }
  }
}
