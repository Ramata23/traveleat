import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import Dashboard from '../views/Dashboard.vue'
import store from '../store'
import ConnectedHeader from '../views/ConnectedHeader.vue'
import Recettes from '../views/Recettes.vue'


Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sign_in',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/sign_up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/recettes',
    name: 'Recettes',
    component: Recettes
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
  mode: 'history',
  routes
})
export default router