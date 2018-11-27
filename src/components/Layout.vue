<template>
  <el-container>

    <el-aside style="padding-top:60px" width="60px">

      <el-menu
          default-active="2"
          router
          class="el-menu-vertical-demo">
          <el-menu-item index="home">
            <i class="el-icon-menu"></i>

          </el-menu-item>
          <el-menu-item index="home">
            <i class="el-icon-document"></i>
         <router-view/>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>

          </el-menu-item>

       </el-menu>

    </el-aside>

    <el-container>
      <el-header height="50px">Header</el-header>
      <el-main router>
        <router-view/>

      </el-main>
    </el-container>

  </el-container>

</template>
<script>
export default {
  // name: 'Layout',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang ="less" scoped>
.el-aside {
  color: #fff;
  text-align: center;
  background-color: #313b42;
}
.el-header {
  background-color: #2bbfbd;
  height: 100px;
}
.el-main {
  background-color: #f2f4f8;
  color: #333;
  height: 1000px;
  padding: 10px;
}
</style>
