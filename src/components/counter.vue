<style scoped>
  .counter {
    max-width: 200px;
    margin: 0 auto;
    height: 200px;
    transition: transform .3s, box-shadow .3s;
    border-radius: 4px;
    box-shadow: 0 0 10px #E2E2E2;
    background-color: #fff;
    margin-top: 20px;
    font-size: 70px;
    text-align: center;
    line-height: 200px;
    cursor: pointer;
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 18px rgba(0, 0, 0, 0.2);
    }
  }
</style>

<template>
  <div class="counter" @click="handleClick">
    {{ count }}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: 1
      }
    },
    methods: {
      handleClick () {
        this.count++
      }
    }
  }
</script>
