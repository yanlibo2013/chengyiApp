import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  data:null
}

// mutations
const mutations = {
  [types.SET_LOGIN] (state, { result }) {
    state.data = result;
  },
  [types.EXIT_LOGIN] (state, { result }) {
    state.data = result;
  }
}

export default {
  state,
  mutations
}
