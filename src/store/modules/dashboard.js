import axios from 'axios'

export default {
  state: {
    urlApi: process.env.VUE_APP_URL,
    chartData: []
  },
  mutations: {},
  actions: {
    getIncomeTotal(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.urlApi}transaction/income`, payload)
          .then(response => {
            resolve(response.data.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    getExpenseTotal(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.urlApi}transaction/expense`, payload)
          .then(response => {
            resolve(response.data.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    getIncomePerDay(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.urlApi}transaction/income/day`, payload)
          .then(response => {
            resolve(response.data.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    getExpensePerDay(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.urlApi}transaction/expense/day`, payload)
          .then(response => {
            resolve(response.data.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    }
  },
  getters: {}
}
