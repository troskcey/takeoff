<template lang="pug">
.input
  input(
    :placeholder="placeholder"
    :type="type"
    @input="$emit('input', $event.target.value)"
  )
  .icon(v-if="local_type == 'search'")
    fa-icon(icon="search")
</template>

<script>
export default {
  name: "to-input",
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    local_type: String
  }
}
</script>

<style lang="sass" scoped>
.input
  position: relative 

input
  width: 100%
  height: 100%
  padding: 0.5rem 1rem
  box-sizing: border-box
  
.icon
  font-size: 1.5rem
  position: absolute
  top: 50%
  right: 1rem
  margin-top: -0.75rem
</style>