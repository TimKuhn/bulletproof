import Vue from 'vue'
import VueRouter from 'vue-router'
import Foods from '../views/Foods.vue'
import Timing from '../views/Timing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/foods',
    name: 'Foods',
    component: Foods
  },
  {
    path: '/timing',
    name: 'Timing',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Timing.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
