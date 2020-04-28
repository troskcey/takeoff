<template lang="pug">
.wrapper
  .item(
    v-for="head in headers"
    :key="head.value"
    :class="{ active: activeTab === head.value }"
    @click="$emit('pickTab', head.value)"
  ) 
    .name {{ head.name }}
    .content 
      slot
</template>

<script>
export default {
  name: "to-tabs",
  props: {
    headers: {
      type: Array,
      required: true
    },
    activeTab: {
      type: String,
      required: true
    }
  },
}
</script>

<style lang="sass" scoped>
.wrapper
  width: 100%
  display: flex
  justify-content: space-between
  position: relative
  margin-bottom: 1rem

  &::after, .item.active::after
    content: ""
    height: 2px
    width: 100%
    position: absolute
    bottom: -1rem
    background: $Grey
    right: 0
  
  &::after
    background: $Grey

  .item.active::after
    background: $Green
    z-index: 1

  .item
    position: relative
    padding: 0 2rem
    text-align: center

    .name
      color: $Green
      font-size: 2rem
      cursor: pointer

    &.active .name 
        color: $Black
</style>