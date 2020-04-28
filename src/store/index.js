import Vue from 'vue'
import Vuex from 'vuex'

import ApiService from '../api/Service.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    polls: [],
    fields: [],
    translate: {},
    loading: true,
    error: null
  },
  mutations: {
    setPollsInfo(state, data) {
      state.polls = data;
    },
    setPollsTranslate(state, data) {
      state.translate = data;
    },
    setLoading(state) {
      state.loading = true;
    },
    endLoading(state) {
      state.loading = false
    },
    setError(state, error) {
      state.error = error
    },
    addCondition(state) {
      state.fields.push({
        condition: null,
        childs: []
      })
    },
    deleteCondition(state, index) {
      state.fields.splice(index, 1);
    },
    addFieldChild(state, { index, type }) {
      console.log(state.fields, index, type)
      state.fields[index].childs.push({
        value: "",
        type
      })
    },
  },
  actions: {
    async getPollsInfo({ commit }) {
      try {
        commit("setLoading");
        // emulate api work
        const data = await ApiService.getPollsInfo();
        const translate = await ApiService.getPollsTranslate();
        
        commit("setPollsInfo", data);
        commit("setPollsTranslate", translate)
        commit("endLoading");
      } catch(error) {
        commit("setError", error);
      }
    },
    addFieldChild({ commit }, { index, type }) {
      commit("addFieldChild", { index, type });
    }, 
    deleteCondition({ commit }, index) {
      commit("deleteCondition", index);
    }, 
    addCondition({ commit, state}) {
      // если не выбрано условие у предпоследнего
      const length = state.fields.length;

      if (length !== 0 && !state.fields[length - 1].condition) {
        commit("setError", new Error("Indicate the condition and try adding again"))
        return
      } else {
        commit("setError", null)
      }

      commit("addCondition");
    },
    deleteError({ commit }) {
      commit("setError", null);
    }, 
    async sendForm({ commit, state }) {
      try {
        commit("setLoading");
        const res = await ApiService.sendForm(state.fields);
        commit("endLoading");
        
        if (res.status !== 200) throw new Error("Something went wrong, try again later...");
      } catch (error) {
        console.log(error)
        commit("setError", error);
      }
    }
  },
  getters: {
    POLLS: state => state.polls,
    TRANSLATE: state => state.translate,
    LOADED: state => !state.loading,
    FIELDS: state => state.fields,
    ERROR: state => state.error
  }
})
