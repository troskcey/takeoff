import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/polls",
    name: "Polls",
    component: ( ) => import(/* webpackChunkName: "polls" */ '../views/Polls.vue')
  },
  {
    path: "/users",
    name: "Users",
    component: ( ) => import(/* webpackChunkName: "users" */ '../views/Users.vue')
  },
  {
    path: "/blacklists",
    name: "Blacklists",
    component: ( ) => import(/* webpackChunkName: "blacklists" */ '../views/Blacklists.vue')
  },
  {
    path: "/call-center",
    name: "CallCenter",
    component: ( ) => import(/* webpackChunkName: "call_center" */ '../views/CallCenter.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
