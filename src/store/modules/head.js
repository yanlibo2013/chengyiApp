import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  data:[
    {categoryId:1, path:"/jhxt.html", categoryName:"集合信托"},
    {categoryId:2, path:"/zgjh.html", categoryName:"资管计划"},
    {categoryId:4, path:"/zqjj.html", categoryName:"证券基金"},
    {categoryId:16, path:"/gqjj.html", categoryName:"股权基金"},
    {categoryId:128, path:"/hwtz.html", categoryName:"海外投资"}
  ]
}

// mutations
const mutations = {
}

export default {
  state,
  mutations
}
