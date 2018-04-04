import Vue from 'vue'
import Router from 'vue-router'

import AppLogin from '../components/AppLogin'
import People from '../components/People'
import ReadPerson from '../components/ReadPerson'
import UpdatePerson from '../components/UpdatePerson'
import Opportunities from '../components/Opportunities'
// import { GC_USER_ID } from '../constants/settings'

// let userId = localStorage.getItem(GC_USER_ID)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // redirects to the first page of the route where new posts are displayed
      redirect: '/people'
    },
    {
      path: '/login',
      component: AppLogin
    },
    // ------------------------------------------ People ----------------------------------
    {
      path: '/people',
      component: People
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: '/person/:id',
      component: ReadPerson
    },
    {
      path: '/person/update/:id',
      component: UpdatePerson,
      name: 'updatePerson'
    },
    // ------------------------------------------ Opportunities ----------------------------------
    {
      path: '/opportunities',
      component: Opportunities
    }
  ],
  // set mode to ‘history’ to remove the hash from the URLs
  mode: 'history'
})

// const router = new Router({
//   routes: [
//     {
//       path: '/people',
//       component: People,
//       meta: {
//         requiresAuth: true
//       }
//     }
//   ]
// })

// router.beforeEach((to, from, next) => {
//   const currentUser = userId
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
//   if (requiresAuth && !currentUser) {
//     next('/login')
//   } else if (requiresAuth && currentUser) {
//     next()
//   } else {
//     next()
//   }
// })
