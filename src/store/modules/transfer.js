export default {
  state: {
    isSelect: false,
    isContinue: false
  },
  mutations: {
    setIsSelect(state, payload) {
      state.isSelect = payload
    },
    setIsContinue(state, payload) {
      state.isContinue = payload
    }
  },
  actions: {
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
    }
  }
}
