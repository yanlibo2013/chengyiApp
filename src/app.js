require('es6-promise').polyfill()
import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router'
import { sync } from 'vuex-router-sync'





sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }


