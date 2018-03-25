import Vue from 'vue'
import Router from 'vue-router'

import AppLogin from '../components/AppLogin'
import CreateLink from '../components/CreateLink'
import LinkList from '../components/LinkList'
import Search from '../components/Search'
import People from '../components/People'
import ReadPerson from '../components/ReadPerson'
import UpdatePerson from '../components/UpdatePerson'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // redirects to the first page of the route where new posts are displayed
      redirect: '/new/1'
    },
    {
      path: '/create',
      component: CreateLink
    },
    {
      path: '/login',
      component: AppLogin
    },
    {
      path: '/new/:page',
      component: LinkList
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/top',
      component: LinkList
    },
    // ------------------------------------------ People ----------------------------------
    {
      path: '/people',
      component: People
    },
    {
      path: '/person/:id',
      component: ReadPerson
    },
    {
      path: '/person/update/:id',
      component: UpdatePerson,
      name: 'updatePerson'
    }
  ],
  // set mode to ‘history’ to remove the hash from the URLs
  mode: 'history'
})
