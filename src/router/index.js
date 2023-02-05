import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from '../views/Search.vue'
import SearchIngredients from '../views/SearchIngredients.vue'
import SearchByTime from '../views/SearchByTime.vue'
import SearchByRating from '../views/SearchByRating.vue'
import SearchVegan from '../views/SearchVegan.vue'
import CreateRecipe from '../views/CreateRecipe.vue'
import EditRecipe from '../views/EditRecipe.vue'
import CreateSteppingRecipe from '../views/CreateSteppingRecipe.vue'
import ProfileDrafts from '../views/ProfileDrafts.vue'
import ProfileRecipes from '../views/ProfileRecipes.vue'
import ProfileUser from '../views/ProfileUser.vue'
import Profile from '../views/Profile.vue'
import Notifications from '../views/Notifications.vue'
import Favorities from '../views/Favorities.vue'
import Registration from '../views/Registration.vue'
import Autorisation from '../views/Autorisation.vue'
import Calendar from '../views/Calendar.vue'
import Timer from '../views/CalendarTimer.vue'
import MainVIew from  '../views/MainView.vue'
import Recept from  '../views/Recept.vue'
import ReceptText from  '../views/ReceptText.vue'
import ReceptIngridient from  '../views/ReceptIngridient.vue'
import SteppingRecipe from  '../views/Steps/SteppingRecipe.vue'
import ReadyRecipe from  '../views/Steps/ReadyRecipe.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/search-main',
    name: 'Search',
    component: Search
  },
  {
    path: '/search-ing',
    name: 'SearchIngredients',
    component: SearchIngredients
  },
  {
    path: '/search-time',
    name: 'SearchByTime',
    component: SearchByTime
  },
  {
    path: '/search-vegan',
    name: 'SearchVegan',
    component: SearchVegan
  },
  {
    path: '/search-rating',
    name: 'SearchByRating',
    component: SearchByRating
  },
  {
    path: '/new-recipe',
    name: 'CreateRecipe',
    component: CreateRecipe
  },
  {
    path: '/edit-recipe',
    name: 'EditRecipe',
    component: EditRecipe
  },
  {
    path: '/stepping-recipe',
    name: 'CreateSteppingRecipe',
    component: CreateSteppingRecipe
  },
  {
    path: '/profile-draft',
    name: 'ProfileDrafts',
    component: ProfileDrafts
  },
  {
    path: '/profile-recipes',
    name: 'ProfileRecipes',
    component: ProfileRecipes
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/profile-user',
    name: 'ProfileUser',
    component: ProfileUser
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications
  },
  {
    path: '/favorities',
    name: 'Favorities',
    component: Favorities
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/autorisation',
    name: 'Autorisation',
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
  {
    path: '/ready',
    name: 'ReadyRecipe',
    component: ReadyRecipe
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
