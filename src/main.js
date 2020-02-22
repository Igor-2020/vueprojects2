import Vue from 'vue'
import App from './App.vue'
import './assets/styles/styles.scss'
import store from './vuex/store.js'
import router from "./router";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
