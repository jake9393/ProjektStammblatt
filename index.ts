import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Projektstammblatt from '../views/Projektstammblatt.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Projektstammblatt',
    component: Projektstammblatt
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
