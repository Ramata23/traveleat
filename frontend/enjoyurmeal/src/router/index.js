import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import store from '../store'
import ConnectedHeader from '../views/ConnectedHeader.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard, beforeEnter(to, from, next) {
      // check vuex store //
      console.log(store.getters.isToken);
      if (store.getters.isToken) {
        next()
      } else {
        next({
          path: "/" // back to safety route //
        });
      }
    }
  },
    {
    path: "/connectedheader",
    name: "ConnectedHeader",
    component: ConnectedHeader
  }
];
const router = new VueRouter({
  // mode: 'history',
  routes
})
export default router