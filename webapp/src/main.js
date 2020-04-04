import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core' // MUST BE ADDED
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' // MUST BE ADDED
import { faClock } from '@fortawesome/free-solid-svg-icons' // MUST BE ADDED

library.add(faClock) // MUST BE ADDED

Vue.component('font-awesome-icon', FontAwesomeIcon) // MUST BE ADDED

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
