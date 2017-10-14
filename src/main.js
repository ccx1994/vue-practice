// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import swiper from './components/swiper/swiper.vue'

Vue.config.productionTip = false
Vue.prototype.global = new Vue();
Vue.component(swiper.name,swiper)

/* eslint-disable no-new */
const a = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})



