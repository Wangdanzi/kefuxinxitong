<template>
  <el-container>
    <el-aside style="padding-top:60px; display:inline-block" width="60px">
      <el-menu default-active="home" router class="el-menu-vertical-demo" unique-opened>
        <el-menu-item index="/home">
          <i class="el-icon-menu"></i>
          <!-- <router-view/> -->
        </el-menu-item>
        <el-menu-item index="/index">
          <i class="el-icon-document"></i>
          <!-- <router-view/> -->
        </el-menu-item>
        <el-menu-item index="/tenement">
          <i class="el-icon-setting"></i>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header height="60px">
        <iframe
          v-show="iframeState"
          id="show-iframe"
          frameborder="0"
          name="showHere"
          scrolling="auto"
          src="http://192.168.62.221/Admin/AgentPublic/agentPage?400_cno=002&400_sign=cded0ed414279610e4d42fcb0a5f3f20"
        ></iframe>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: "Layout",
  data() {
    return {
      iframeState: true
      // goBackState: false,
    };
  },
  mounted() {
    const oIframe = document.getElementById("show-iframe");
    const deviceWidth = document.documentElement.clientWidth;
    const deviceHeight = document.documentElement.clientHeight;
    oIframe.style.width = deviceWidth + "px";
    oIframe.style.height = deviceHeight + "px";
  },
  methods: {
    goBack() {
      this.goBackState = false;
      this.iframeState = false;
    }
  }
};
</script>

<style>
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang ="less" scoped>
.el-aside {
  color: #fff;
  text-align: center;
  background-color: #313b42;
}
.el-header {
  background-color: #3e88c6;
}
.el-main {
  background-color: #f2f4f8;
  color: #333;
  padding: 0px;
}
</style>
