<template>
  <!-- <div>12313132121</div> -->
  <!-- <el-dialog id="completeDialog" title="办理任务" :visible.sync="dialogComplete" width="95%" top="5px">
    <div id="completeDiv">
      <iframe :src="completeTask" height="500" width="100%"></iframe>
    </div>
  </el-dialog>
  </template>-->
  <div class="accept-container">
    <!-- <div class="go-back" v-show="goBackState" @click="goBack">GoBack</div> -->
    <!-- <ul> -->
    <!-- <li v-for="item in webAddress"> -->
    <a :href="item[0].link" target="showHere" @click="showIframe">{{item[0].name}}</a>
    <!-- </li> -->
    <!-- </ul> -->
    <iframe
      v-show="iframeState"
      id="show-iframe"
      frameborder="0"
      name="showHere"
      scrolling="auto"
      src="http://192.168.62.221/Admin/AgentPublic/agentPage?400_cno=002&400_sign=cded0ed414279610e4d42fcb0a5f3f20"
    ></iframe>
  </div>
</template>
<script>
// export default {
//   complete(index, row) {
//     this.currentTaskId = row.task.id;
//     this.completeTask = "xxx";
//     $("#completeDiv").html(
//       "<iframe  src='" +
//         this.completeTask +
//         "' height='500' width='100%'></iframe>"
//     );
//     this.dialogComplete = true;
//   }
// };
export default {
  name: "Lease",
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

<style lang="less" scoped>
// @import "./style";
</style>

