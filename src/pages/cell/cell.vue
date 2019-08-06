<template>
  <div id="app">
    <div class="nav">
      <a href="index.html"> index </a>&nbsp;
      <a href="other.html"> other </a>
    </div>
    <cell></cell>
  </div>
</template>

<script>
import cell from '@/components/cell.vue'
export default {
  name: 'App',
  components: { cell }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  height:100%;
  background: pink url('../../assets/nodeLog.jpg') no-repeat center center;
}
</style>
