import Vue from 'vue'
import App from './App.vue'
import  BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import 'es6-promise/auto'
import Vuex from 'vuex'
// import store from './store'
import Vuelidate from 'vuelidate'


Vue.use(Vuelidate)

Vue.use(Vuex) 
 
Vue.use(VueAxios, axios)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  // store,
  // router,
  render: h => h(App),
}).$mount('#app')
