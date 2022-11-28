import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import admin_action from './admin_action'
import user_action from './user_action'
import load_event from './load_event'

Vue.use(Vuex)

const store =  new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    admin_action,
    user_action,
    load_event
  }
})

export default store
