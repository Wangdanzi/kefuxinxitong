<template>
  <el-container class="home">
    <!-- <el-header>
      <div class="logo"></div>
      <div class="logout">
        欢迎光临
        <a href="javascript:;" @click="logout">退出</a>
      </div>
       <h1 class="title">电商后台管理系统</h1>
    </el-header> -->
    <el-container>
      <el-aside width="200px">
        <!-- el-menu: 菜单组件 -->
        <!-- default-active：默认选中的菜单 -->
        <!-- el-submenu: 子菜单 -->
        <!-- template：表示子菜单的内容 -->
        <!-- el-menu-item-group： 子菜单的分组 -->
        <!-- el-menu-item：菜单项  -->
        <!-- unique-opened：最多只能打开一个子菜单 -->
        <!-- router:开启了路由模式， 当我们点击导航的时候，会发生路由的跳转, 跳转到index对应的路径 -->
        <el-menu
          default-active="users"
          class="el-menu-vertical-demo"
          background-color="#fff"
          text-color="#000"
          active-text-color="#ffd04b"
          unique-opened
          router>
          <el-submenu index="users">
            <template slot="title" style="padding-left:1px">
              <i class="el-icon-location"></i>
              <span>所有工单 200</span>
            </template>
            <!-- 放菜单项 -->
            <el-menu-item index="/users">            
              <span slot="title">今日待跟进 2</span>
            </el-menu-item>
            <el-menu-item index="">              
              <span slot="title">预约代办 23</span>
            </el-menu-item>
            <el-menu-item index="">             
              <span slot="title">已解决 23</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>房源组 71</span>
            </template>
            <el-menu-item index="roles">            
              <span slot="title">今日待跟进</span>
            </el-menu-item>
            <el-menu-item index="">              
              <span slot="title">预约代办</span>
            </el-menu-item>
            <el-menu-item index="">               
              <span slot="title">角色列表</span>
            </el-menu-item>
            <el-menu-item index="">               
              <span slot="title">已解决</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <!-- 配置了子路由的出口 -->
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
// 如果给style添加scoped属性，样式只会在当前组件生效
// 实现原理： 如果给当前组件的style添加了scoped,,,,把当前组件中所有的div都增加一个随机的属性
.home {
  height: 100%;
  .el-header {
    .logout {
      width: 180px;
      height: 60px;
      float: right;
      line-height: 60px;
      text-align: right;
      font-weight: 700;
      a {
        color: darkorange;
      }
    }
  }
  .el-aside {
    background-color: #fff;

    .el-submenu {
      width: 200px;
    }
  }
  .el-main {
    background-color: #d4dfe4;
  }
  .el-submenu__title {
    padding-left: 0px;
  }
}
</style>
