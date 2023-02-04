import Vue from 'vue'
import VueRouter from 'vue-router'
import Registration from '../views/Registration.vue'
import Autorisation from '../views/Autorisation.vue'
import Calendar from '../views/Calendar.vue'
import Timer from '../views/CalendarTimer.vue'
import MainVIew from  '../views/MainView.vue'
import Recept from  '../views/Recept.vue'
import ReceptText from  '../views/ReceptText.vue'
import ReceptIngridient from  '../views/ReceptIngridient.vue'
import SteppingRecipe from  '../views/Steps/SteppingRecipe.vue'

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
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar
  },
  {
    path: '/timer',
    name: 'Timer',
    component: Timer
  },
  {
    path: '/mainView',
    name: 'MainView',
    component: MainVIew
  },
  {
    path: '/recept',
    name: 'Recept',
    component: Recept
  },
  {
    path: '/receptText',
    name: 'ReceptText',
    component: ReceptText
  },
  {
    path: '/Ingridient',
    name: 'ReceptIngridient',
    component: ReceptIngridient
  },
  {
    path: '/steping',
    name: 'SteppingRecipe',
    component: SteppingRecipe
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
