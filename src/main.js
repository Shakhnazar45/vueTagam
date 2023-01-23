import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import jQuery from 'jquery'
import 'popper.js'
import 'bootstrap'
import './bootstrap/bootstrap.scss'

window.$ = window.jQuery = jQuery

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')


// Аавторизация и аутентификация срок 1 неделя