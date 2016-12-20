import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import createLogger from '../plugins/logger'

import  home from "./modules/home";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 1;

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    home

  },
  /*strict: debug,*/
  plugins: debug ? [createLogger()] : []
})
