<template>
  <div id="app">
    <div class="nav">
          <a href="cell.html"> cell </a>&nbsp;
          <a href="other.html"> other </a>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
  background: pink url('../../assets/vueLogo.jpg') no-repeat center center;
}
</style>
