<template lang="pug">
nav
  router-link(to="/").logo
    fa-icon(:icon="['fab', 'html5']")
    
  ul.nav
    li.link(
      v-for="link in links"
      :key="link.to"
      :class="{ active: link.to.includes(currentPage) }"
    )
      router-link(:to="link.to")
        .icon
          fa-icon(:icon="link.icon")
        .name {{ link.name }}

  .help
    fa-icon(icon="headset")
</template>

<script>
export default {
  name: "to-nav",
  mounted() {
    console.log(this.$route.path)
    if (this.$route.path !== "/"){
      this.currentPage = this.$route.path;
    }
  },
  data() {
    return {
      currentPage: null,
      links: [
        {
          name: "Polls",
          icon: "list",
          to  : "/polls"
        },
        {
          name: "Users",
          icon: "users",
          to  : "/users"
        },
        {
          name: "Blacklists",
          icon: "skull-crossbones",
          to  : "/blacklists"
        },
        {
          name: "Call center",
          icon: "phone-alt",
          to  : "/call-center"
        }
      ]
    }
  },
  watch: {
    $route(to) {
      console.log(to)
    }
  },
}
</script>

<style lang="sass" scoped>
nav
  display: flex
  flex-flow: column nowrap
  justify-content: space-between
  height: 100%
  text-align: center

.logo
  font-size: 5rem

.icon, .help
  font-size: 4rem

.logo, .link, .help
  cursor: pointer

.name
  font-size: 1.2rem

.nav
  .link
    border: 2px solid white
    margin-bottom: 1rem
    border-radius: 1rem
    
    &.active
      background-color: $Grey

    a
      display: flex
      flex-flow: column
      align-items: center
      padding-bottom: 1rem
      text-decoration: none
      color: black

    &:last-child
      margin-bottom: 0

    &:hover
      border-color: $Green
      background-color: $White
      
      a
        color: $Green
</style>