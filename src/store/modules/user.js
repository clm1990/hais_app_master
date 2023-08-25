const state = {
  token: '',
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
}

const actions = {
  setStoreToken({ commit }, token) {
    commit('SET_TOKEN', token)
  },

  removeStoreToken({ commit }){
    commit('SET_TOKEN', "")
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
