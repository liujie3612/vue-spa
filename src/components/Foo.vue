<template>
  <div class="foo">
    <h1>{{ msg }}</h1>
    <!-- <div> {{count}} </div> -->
  </div>
</template>

<script>
export default {
  name: 'foo',
  data () {
    return {
      msg: 'Foo'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
