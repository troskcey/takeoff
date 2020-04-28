import ApiService from '../../api/Service.js';

export default {
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
      commit("setError", error);
    }
  }
}