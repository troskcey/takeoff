<template lang="pug">
.wrapper(v-if="LOADED")
  h2.top-title Add poll
  form(:action="address" method="POST")
    .field(
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
        .item(
          v-for="(item, itemIndex) in field.childs"
          :key="itemIndex"
        )
          .title {{ TRANSLATE[item.type] }} {{ itemIndex + 1 }}

          div(:class="item.type")

            template(v-if="item.type === 'range'")
              .range-input
                label from
                  to-input(v-model.number="item.from" type="number")
                label to
                  to-input(v-model.number="item.to" type="number")

            template(v-else)
              select(v-model="item.value")
                option(
                  v-for="option in field.condition.values"
                  :value="option.value"
                ) {{ option.name }}

      .bottom
        div
        .button.add(v-if="field.condition")
          button(
            @click.prevent="addFieldChild({ index, type: field.condition.type })"
          )
            fa-icon(icon="plus")
            span.text Add {{ field.condition.type }}

        div(v-else)

        .button.delete
          button(
            @click.prevent="deleteCondition(index)"
          )
            fa-icon(icon="trash-alt")
            span.text Delete condition

  h1.error(v-if="ERROR") {{ ERROR }}
  button.addCondition(@click="addCondition")
    .button-inner
      fa-icon.plus(icon="plus")
      .first-line Click to add a new selection condition
      .second-line All conditions are interconnected by a logical 'AND'
      
  .sendRequest
    button(@click.prevent="sendRequest" type="submit") Send
</template>

<script>
import TOInput from "../TOInput.vue";

import { mapGetters, mapActions } from "vuex";
export default {
  name: "respondents",
  components: {
    [TOInput.name]: TOInput
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
    ...mapGetters(["POLLS", "TRANSLATE", "LOADED", "FIELDS", "ERROR"])
  },
  methods: {
    ...mapActions([
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
  margin: 1rem 0
  padding: 1.5rem

  .header
    display: grid
    grid-template-columns: 1fr 2fr

    .title
      font-size: 2rem
      font-weight: 400

    .select

  .content
    .item
      padding-top: 2rem
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
          padding-right: 2rem

  .bottom
    padding-top: 3rem
    display: grid
    grid-template-columns: repeat(3, 1fr)

    .button
      width: 100%
      display: flex

      &.delete
        justify-content: flex-end
      
      &.delete button, &.add button
        border: 1px solid
        background-color: $White
        border-radius: 1rem
      &.delete button
        border-color: $Red
        color: $Red
      &.add button
        border-color: $Green
        color: $Green

      button
        padding: 1rem
        cursor: pointer

        &:focus
          outline: none
        
      .text
        padding-left: 1rem

.addCondition
  margin-top: 1rem
  border: 1px solid $Green
  padding: 1rem
  cursor: pointer
  width: 100%
  background-color: $White

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

  button
    color: $Green
    background-color: $White
    padding: 1.5rem
    font-size: 2rem
    cursor: pointer
    border: 2px solid $Green
    margin-top: 1rem
.error
  color: $Red
</style>