<style src="./style" scoped></style>

<template>
  <div class="todo-section">
    <todo-header></todo-header>
    <todo-body></todo-body>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
  export default {
    components: {
      todoHeader: require('../todoHeader'),
      todoBody: require('../todoBody'),
      todoFooter: require('../todoFooter')
    }
  }
</script>
