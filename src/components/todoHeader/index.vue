<template>
  <header>
    <h1>Todos</h1>
    <todo-input></todo-input>
  </header>
</template>

<script>
  export default {
    components: {
      todoInput: require('../todoInput')
    }
  }
</script>
