<template lang="pug">
header

  to-input.search(
    placeholder="System search"
    type="text"
    local_type="search"
    v-model="search"
  )

  .user
    .icon
      fa-icon(icon="user")
    .info
      span.name     Alexander C.
      span.position Administator
</template>

<script>
// name is static, but can get from vuex
import TOInput from "@/components/TOInput.vue";

export default {
  name: "to-header",
  components: {
    [TOInput.name]: TOInput
  },
  data() {
    return {
      search: ""
    }
  }
}
</script>

<style lang="sass" scoped>
header
  display: flex
  align-items: center
  justify-content: space-between
  padding: 1rem 2rem

.search
  width: 40rem
  height: 4rem

.user
  display: flex
  align-items: center
  .icon
    font-size: 4rem
    padding-right: 1rem
  .info
    display: grid
    .name
      font-size: 1.6rem
    .position
      font-size: 1.4rem
      color: $Grey
</style>