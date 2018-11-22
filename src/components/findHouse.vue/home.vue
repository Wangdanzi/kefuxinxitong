<template>
    <div>
        <div class="head">
             <p>我的工作台</p>
             <div class="number">
                 <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
                    <el-menu-item index="/home/followUp" class="followUp content" @click="followUpMethod">
                        <div>2</div>
                        <div>今日待跟进工单</div>
                    </el-menu-item>
                    <el-menu-item index="/appointment" class="wait content" >
                        <div>2</div>
                        <div>预约代办的工单</div>
                    </el-menu-item>
                    <el-menu-item index="/resolved" class="solved content">
                        <div>2</div>
                        <div>我已解决的工单</div>
                   </el-menu-item>
                </el-menu>
             </div>
        </div>
        <div class="input">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="工单编号">
                    <el-input v-model="formInline.user"></el-input>
                </el-form-item>
                <el-form-item label="来电号码">
                    <el-input v-model="formInline.user"></el-input>
                </el-form-item>
                <el-form-item label="来源">
                    <el-select v-model="formInline.region">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="客户姓名">
                    <el-input v-model="formInline.user"></el-input>
                </el-form-item>
                <el-form-item label="反馈方">
                    <el-select v-model="formInline.region">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="租约ID">
                    <el-input v-model="formInline.user"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">搜索</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">创建工单</el-button>
                </el-form-item>
            </el-form>
        </div>
       <!-- <followUp v-show="followUp"></followUp> -->
       <!-- <appointment v-show="appointment"></appointment>
       <resolved v-show="resolved"></resolved> -->
        <router-view></router-view>
    </div>
</template>
<script>
import followUp from "../findHouse.vue/followUp";
import appointment from "../findHouse.vue/appointment";
import resolved from "../findHouse.vue/resolved";
import layout from "../findHouse.vue/layout"
export default {
  data() {
    return {
      formInline: {
        //表单数据
        user: "",
        region: ""
      },
      activeIndex: '1',
      activeIndex2: '1',
      followUp:"true",
      appointment:'false',
      resolved:"false",

    };
  },
  components:{
    followUp,
    layout,
    resolved,
    appointment
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      this.$router.push({path:"/createWork"})
    },
   handleSelect(key, keyPath) {
    console.log(key, keyPath);
    },
    followUpMethod(){
        // this.followUp=false;
    }
  }
};
</script>

 <style lang="less" scoped>
@import "../../css/home.less";
</style>

