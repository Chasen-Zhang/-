import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'

import './assets/common/common.css'

Vue.prototype.$http = axios;
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
