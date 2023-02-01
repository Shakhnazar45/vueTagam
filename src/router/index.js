import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
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
import Profile from '../views/Profile.vue'
import Notifications from '../views/Notifications.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
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
    path: '/notifications',
    name: 'Notifications',
    component: Notifications
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
