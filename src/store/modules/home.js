import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  data:[
    {productId: 938, imgUrl: "http://odqn23waz.bkt.clouddn.com/%E4%B8%AD%E6%B1%9F%E4%BF%A1%E6%89%98.jpg"},
    {productId: 927, imgUrl: "../../assets/img/index_banner2.jpg"},
    {productId: 1051, imgUrl: "../../assets/img/index_banner3.jpg"},
    {productId: 1052, imgUrl: "../../assets/img/index_banner4.jpg"},
  ],
  searchList:[],
  showList:false
}

// mutations
const mutations = {
  [types.GET_SREACH_LIST] (state, { result }) {
    state.searchList = result;
  },
  [types.HIDE_SEARCH_LIST] (state, { result }) {
    state.showList = result;
  },
  [types.SHOW_SEARCH_LIST] (state, { result }) {
    state.showList = result;
  }
}

export default {
  state,
  mutations
}
