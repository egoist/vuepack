<style src="./style" scoped></style>

<template>
  <input placeholder="Whadt needs to be done?"
    @keydown.enter="handleSubmit" v-model="text" />
</template>

<script>
  export default {
    data () {
      return {
        text: ''
      }
    },
    methods: {
      handleSubmit () {
        const addTodoAction = this.$actions.todos.add
        this.$store.dispatch(addTodoAction(this.text))
        this.text = ''
      }
    }
  }
</script>
