import Vue from 'vue'
import Router from 'vue-router'

// import AppLogin from '../components/AppLogin'
import MainLayout from '../components/MainLayout'
import Home from '../components/Home'
import People from '../components/contacts/People'
import ReadPerson from '../components/contacts/ReadPerson'
import UpdatePerson from '../components/contacts/UpdatePerson'
import Opportunities from '../components/opportunities/Opportunities'
import Admin from '../components/admin/Admin'
import UpdateUser from '../components/admin/UpdateUser'
import ReadUser from '../components/admin/ReadUser'
import NewUsers from '../components/admin/NewUsers'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '/',
          redirect: '/home'
        },
        {
          path: '/home',
          name: 'Home',
          component: Home,
          meta: {
            requiresAuth: false
          }
        },
        // ------------------------------------------ People ----------------------------------
        {
          path: '/people',
          name: 'People',
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
        // ------------------------------------------ Admin ----------------------------------
        {
          path: '/admin',
          component: Admin
        },
        {
          path: '/newusers',
          component: NewUsers
        },
        {
          path: '/user/:id',
          component: ReadUser
        },
        {
          path: '/user/update/:id',
          component: UpdateUser,
          name: 'updateUser'
        },
        // ------------------------------------------ Opportunities ----------------------------------
        {
          path: '/opportunities',
          component: Opportunities
        }
      ]
    }
  ]
})
