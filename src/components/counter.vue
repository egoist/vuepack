<style>
  .counter {
    max-width: 600px;
    margin: 100px auto;
    text-align: center;
    & .count {
      font-size: 4rem;
    }
  }
</style>

<template>
  <div class="counter">
    <h2 class="count">{{ count }}</h2>
    <button
      @click="$store.dispatch('INCREMENT')"
      class="increment">
      Increment
     </button>
    <button
      @click="$store.dispatch('DECREMENT')"
      class="decrement">
      Decrement
     </button>
    <button
      class="increment-async"
      @click="incrementAsync">
      Increment Async
    </button>
  </div>
</template>

<script>
  import {incrementAsync} from '../vuex/actions'

  export default {
    vuex: {
      getters: {
        count: state => state.app.count
      },
      actions: {
        incrementAsync
      }
    }
  }
</script>
