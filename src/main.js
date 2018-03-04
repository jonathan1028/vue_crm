// 1
import Vue from 'vue'
import 'tachyons'
import apolloProvider from './apollo-provider'
import App from './App'
import router from './router'
import { GC_USER_ID } from './constants/settings'

let userId = localStorage.getItem(GC_USER_ID)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  provide: apolloProvider.provide(),
  router,
  data: {
    userId
  },
  render: h => h(App)
})
