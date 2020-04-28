<template lang="pug">
layout-default
  to-tabs(:headers="tabs" :activeTab="currentTab" @pickTab="pickTab")
  .content
    component(:is="currentTab")
</template>

<script>
import TOTabs from "../components/TOTabs.vue";

export default {
  components: {
    "conditions": ( ) => import("../components/Polls/Conditions.vue"),
    "questions" : ( ) => import("../components/Polls/Questions.vue"),
    "parameters": ( ) => import("../components/Polls/Parameters.vue"),
    "logic": ( ) => import("../components/Polls/Logic.vue"),
    "respondents": ( ) => import("../components/Polls/Respondents.vue"),
    [TOTabs.name]: TOTabs
  },
  data() {
    return {
      currentTab: "respondents",
      tabs: [
        {
          name: "Conditions",
          value: "conditions"
        },
        {
          name: "Logic",
          value: "logic"
        },
        {
          name: "Parameters",
          value: "parameters"
        },
        {
          name: "Questions",
          value: "questions"
        },
        {
          name: "Respondents",
          value: "respondents"
        }
      ]
    }
  },
  methods: {
    pickTab(value) {
      this.currentTab = value;
    }
  },
}
</script>

<style lang="sass" scoped>
.content
  margin-top: 3rem
</style>