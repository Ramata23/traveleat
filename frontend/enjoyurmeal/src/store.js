import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    token: null,
    userdata: null
  },
  getters: {
    isToken: (state) => state.token != null,
    isUsername: (state) => state.userdata, 
    isUserid: (state) => state.userdata 

  },
  mutations: {
    AJOUTE(state, mytoken) {
      state.token = mytoken.token
      state.userdata= mytoken.userdata 
    },
    LOGOUT(state) {
      state.token = null
      state.userdata= null
    }
  },
  actions: {
    ajoute(context, mytoken) {
      context.commit('AJOUTE', mytoken)
    },
    logout(context) {
      context.commit('LOGOUT')
    }

  },
  plugins: [createPersistedState()],

})