<template lang="pug">
.button
  button.pdg1(
    :type="type"
    :class="color"
    @click="$emit('click', $event)"
  ) 
    template(v-if="icon")
      fa-icon(:icon="icon")
      span.pl1 {{ text }}

    template(v-else)
      slot {{ text }}
</template>

<script>
export default {
  name: "to-button",
  props: {
    text: {
      type: String,
      default: "Click!"
    },
    type: {
      type: String,
      default: "submit"
    }, 
    icon: String, // font-awesome-icon
    color: { // red | green
      type: String,
      default: "green"
    },
  }
}
</script>

<style lang="sass">
button
  background-color: $White
  font-size: 1.5rem
  cursor: pointer
  border: 2px solid
  border-radius: 1rem

  &:focus
    outline: none

  &.green
    border-color: $Green
    color: $Green
  
  &.red
    border-color: $Red
    color: $Red
</style>