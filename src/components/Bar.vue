<template>
  <div class="bar">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'bar',
  data () {
    return {
      msg: 'bar'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>