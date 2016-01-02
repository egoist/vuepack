<style src="./style"></style>

<template>
  <div class="todos">
    <div class="todo"
      v-for="todo in todos | todoFilter"
      track-by="id"
      :class="{'todo-done': todo.done}">
      <label class="done">
        <input  type="checkbox"  :checked="todo.done"   @change="toggleTodo(todo.id)"/>
        <div class="checker"></div>
      </label>
      <div class="text">{{ todo.text }}</div>
      <div class="date">{{ todo.date | ago }}</div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    data () {
      return {
        todos: this.$store.state.todos,
        filter: this.$store.state.todoFilter
      }
    },
    ready () {
      this.$subscribe('todos', 'todoFilter as filter')
    },
    methods: {
      toggleTodo (id) {
        const toggleTodoAction = this.$actions.todos.toggle
        this.$store.dispatch(toggleTodoAction(id))
      }
    },
    filters: {
      ago (val) {
        return moment(val).fromNow()
      },
      todoFilter (val) {
        return val.filter(todo => {
          if (this.filter === 'done') {
            return todo.done
          } else if (this.filter === 'todo') {
            return !todo.done
          } else {
            return true
          }
        })
      }
    }
  }
</script>
