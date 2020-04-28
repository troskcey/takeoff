export default {
  POLLS: state => state.polls,
  TRANSLATE: state => state.translate,
  LOADED: state => !state.loading,
  FIELDS: state => state.fields,
  ERROR: state => state.error
}