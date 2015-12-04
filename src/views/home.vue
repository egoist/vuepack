<template>
  <div>
    <star></star>
    <counter></counter>
  </div>
</template>

<script>
  export default {
    components: {
      counter: require('../components/counter'),
      star: require('../components/star')
    }
  }
</script>
