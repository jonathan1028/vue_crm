import Vue from 'vue'
import Router from 'vue-router'

import CreateLink from '../components/CreateLink'
import LinkList from '../components/LinkList'
import AppLogin from '../components/AppLogin'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: LinkList
  },
  {
    path: '/create',
    component: CreateLink
  },
  {
    path: '/login',
    component: AppLogin
  }
  ],
  // set mode to ‘history’ to remove the hash from the URLs
  mode: 'history'
})
