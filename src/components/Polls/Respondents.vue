<template lang="pug">
.wrapper(v-if="LOADED")
  h2.top-title Add poll
  form(:action="address" method="POST")
    .field.mt1.mb1.pdg2(
      v-for="(field, index) in FIELDS"
      :key="index"
    )
      .header
        .title Condition {{ index + 1}}
        select.select(v-model="field.condition" :disabled="field.childs.length != 0")
          option(
            v-for="option in POLLS" 
            :key="option.value"
            :value="option"
          ) {{ option.name }}

      .content
        .item.pt2(
          v-for="(item, itemIndex) in field.childs"
          :key="itemIndex"
        )
          .title {{ TRANSLATE[item.type] }} {{ itemIndex + 1 }}

          div(:class="item.type")

            template(v-if="item.type === 'range'")
              .range-input
                label.pr3 from
                  to-input(v-model.number="item.from" type="number")
                label.pr3 to
                  to-input(v-model.number="item.to" type="number")

            template(v-else)
              select(v-model="item.value")
                option(
                  v-for="option in field.condition.values"
                  :value="option.value"
                ) {{ option.name }}

      .bottom.pt3
        to-button.add(
          v-if="field.condition"
          @click.prevent="addFieldChild({ index, type: field.condition.type })"
          :text="`Add ${field.condition.type}`"
          icon="plus"
        )

        to-button.delete(
          @click.prevent="deleteCondition(index)"
          icon="trash-alt"
          text="Delete condition"
          color="red"
        )

  h1.error(v-if="ERROR") {{ ERROR }}

  .addCondition.mt1.pdg1
    to-button.button(@click.prevent="addCondition")
      .button-inner
        fa-icon.plus(icon="plus")
        .first-line Click to add a new selection condition
        .second-line All conditions are interconnected by a logical 'AND'
      
  to-button.sendRequest.mt1(@click.prevent="sendRequest" color="green" text="Send")
</template>

<script>
import TOInput from "@/components/TOInput.vue";
import TOButton from "@/components/TOButton.vue";

import { mapGetters, mapActions } from "vuex";
export default {
  name: "respondents",
  components: {
    [TOInput.name]: TOInput,
    [TOButton.name]: TOButton
  },
  data() {
    return {
      address: "/"
    }
  },
  mounted() {
    this.getPollsInfo();
  },
  beforeDestroy() {
    this.deleteError();
  },
  computed: {
    ...mapGetters("polls", [
      "POLLS", 
      "TRANSLATE", 
      "LOADED", 
      "FIELDS", 
      "ERROR"
    ])
  },
  methods: {
    ...mapActions("polls", [
      "getPollsInfo", 
      "addFieldChild", 
      "deleteCondition", 
      "addCondition", 
      "sendForm", 
      "deleteError"
    ]),
    sendRequest(event) {
      // some work (send request to server)
      this.sendForm();
    }
  },
}
</script>

<style lang="sass" scoped>
.top-title
  font-size: 3rem
  margin: 0
  font-weight: 400

.field
  border: 1px solid $Grey

  .header
    display: grid
    grid-template-columns: 1fr 2fr

    .title
      font-size: 2rem
      font-weight: 400

  .content
    .item
      display: grid
      grid-template-columns: 1fr 2fr

      &:not(:first-child)
        .title::before
          content: 'or'
          padding: 0 1rem
          border: 1px solid $Grey
          border-radius: 10px
          margin-right: 1rem

      .title
        font-size: 1.5rem
        display: flex
        align-items: center
      
      .range-input
        display: flex

        label
          width: 100px

  .bottom
    display: grid
    grid-template-columns: repeat(3, 1fr)

    .add
      grid-column: 2 / 3

    .delete
      grid-column: 3 / 4

.addCondition
  border: 1px solid $Grey
  width: 100%
  display: grid
  grid-template-columns: repeat(3, 1fr)

  .button
    grid-column: 2 / 3

  .button-inner 
    font-size: 1.5rem
    color: $Green
    width: 100%
    height: 100%
    display: flex
    flex-flow: column nowrap
    justify-content: center

    .plus
      align-self: center
  
.sendRequest
  width: 100%
  display: flex
  justify-content: flex-end

.error
  color: $Red
</style>