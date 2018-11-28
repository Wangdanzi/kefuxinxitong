<template>
<div>
    <el-container>
        <el-aside width="60px">
             <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
                    <el-menu-item index="/home">
                        <i class="el-icon-location"></i>
                    </el-menu-item>
            </el-menu>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
                    <el-menu-item index="/home">
                        <i class="el-icon-menu"></i>
                    </el-menu-item>
            </el-menu>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" >
                    <el-menu-item index="1">
                        <i class="el-icon-document"></i>
                    </el-menu-item>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header></el-header>
            <el-main>
                <create></create>
            </el-main>
        </el-container>
    </el-container>
</div>
</template>

<script>
import create from "../findHouse/create"
export default {
  data() {
    return {
        activeIndex: '1',
        activeIndex2: '1'
    };
  },
  components:{
      create
  },
  methods:{
       handleSelect(key, keyPath) {
    console.log(key, keyPath);
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../css/layout.less";
</style>
