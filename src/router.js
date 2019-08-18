import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AuthRegister from './views/auth/Register'
import AuthLogin from './views/auth/Login'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'root',
    component: Home
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: AuthRegister
  },
  {
    path: '/login',
    name: 'login',
    component: AuthLogin
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
