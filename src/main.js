import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import VueAxios from 'vue-axios'
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'popper.js'
import 'bootstrap'
import '../bootstrap/bootstrap.scss'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
