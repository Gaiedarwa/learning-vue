import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contactus from '../views/Contactus.vue'
import Users from '../views/Users.vue'
import Details from '../views/Details.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name:'Contactus',
    component: Contactus,
  },
  {
    path: '/users',
    name:'Users',
    component: Users,
  },
  {
    path :'/details',
    name:'details',
    component: Details,

  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
