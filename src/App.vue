<template>
  <div id="app">
    <p>
      <Foo></Foo>
      <Bar></Bar>
    </p>
    
    <!-- <router-view></router-view> -->

  </div>
</template>

<script>
import Foo from './components/Foo'
import Bar from './components/Bar'

export default {
  name: 'app',
  components:{
    Foo: Foo,
    Bar: Bar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
