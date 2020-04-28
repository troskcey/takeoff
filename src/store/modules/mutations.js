export default {
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
    state.fields[index].childs.push({
      value: "",
      type
    })
  },
}