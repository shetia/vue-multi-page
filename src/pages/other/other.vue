<template>
  <div id="other">
    <div class="nav">
      <a href="index.html"> index </a>&nbsp;
      <a href="cell.html"> cell </a>
    </div>
    33
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'other'
}
</script>

<style>
#other {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  height:100%;
  background: pink url('../../assets/htmlLogo.jpg') no-repeat center center;
}

</style>
