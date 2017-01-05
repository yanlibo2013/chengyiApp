import 'es6-promise/auto'
import { app, store } from './app'

import Vue from 'vue'
import ElementUI from 'element-ui'
import './assets/css/ele-cy-theme.css'
Vue.use(ElementUI);


// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.
store.replaceState(window.__INITIAL_STATE__)

// actually mount to DOM
app.$mount('#app')

// service worker
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
}
