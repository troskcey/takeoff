<template lang="pug">
div
  to-header.header
  to-nav.navigation
  main.main
    slot
</template>

<script>
import TOHeader from "./Header.vue";
import TONav from "./Nav.vue";

export default {
  name: "layout-default",
  components: {
    [TOHeader.name]: TOHeader,
    [TONav.name]   : TONav
  }
}
</script>

<style lang="sass" scoped>
.navigation
  position: fixed
  width: 110px
  top: 0
  left: 0
  padding: 1rem

.header, .main
  margin-left: 130px

.main
  padding: 0 2rem
</style>