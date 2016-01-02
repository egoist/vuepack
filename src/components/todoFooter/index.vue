<style src="./style"></style>

<template>
  <footer>
    <div class="filters">
      <div class="filter"
        @click="setFilter('all')"
        :class="{active: filter === 'all'}">
        All
      </div>
      <div class="filter"
        @click="setFilter('done')"
        :class="{active: filter === 'done'}">
        Done
      </div>
      <div class="filter"
        @click="setFilter('todo')"
        :class="{active: filter === 'todo'}">
        Todo
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    data () {
      return {
        filter: this.$store.state.todoFilter
      }
    },
    ready () {
      this.$subscribe('todoFilter as filter')
    },
    methods: {
      setFilter (filter) {
        const setFilterAction = this.$actions.todoFilter.setFilter
        this.$store.dispatch(setFilterAction(filter))
      }
    }
  }
</script>
