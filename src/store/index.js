import Vue from 'vue'
import Vuex from 'vuex'

// modules
import polls from "./modules/index";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    polls
  }
})
