<template>
<div>
   <el-button type="text" @click="open">点击打开 Message Box</el-button>
</div>
</template>
<script>
export default {
  data() {
    return {
     
    };
  },
  methods: {
      open() {
        this.$alert('', '', {
          confirmButtonText: '回到我的工作台',
          showCancelButton:true,//是否显示取消按钮
          cancelButtonText:"留在当前工单",//取消按钮的文本内容
          center:true,
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    }
};
</script>
<style lang="scss" scoped>
// @import "../css/helloWorld.scss";
.el-button--primary{
    margin-left: 50px;
}
</style>


