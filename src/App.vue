<!-- 入口组件，page里的组件会插入此组件中，此组件再插入index.html文件里，形成单页面的形式 -->
<template>
  <div id="app">
    <router-view></router-view>
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
  color: #2c3e50;
  /* margin-top: 60px; */
}
body,html{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
