import Vue from 'vue'
import VueRouter from 'vue-router'
import Registration from '../views/Registration.vue'
import Autorisation from '../views/Autorisation.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/autorisation',
    name: 'Autorisation',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Autorisation
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
