<template>
    <div>
        <div class="side">
            <div class="sideMsg">
                <div class="side-in">
                    <span>来电号码:</span>
                    <span>11111111111</span>
                </div>
                <div class="side-in">
                    <span>所在地区:</span>
                    <span>上海</span>
                </div>
                <div class="side-in"> 
                    <span>被叫号码:</span>
                    <span>021-1121212212</span>
                </div>
                <div class="side-in">
                    <span>被叫号码:</span>
                    <span>021-1121212212</span>
                </div>
            </div>
            <div class="sideFrom">
                <div class="customerMsg">客户信息</div>
                <div class="newCustomer">新平台用户</div>
            </div>
        </div>
        <div class="main">
            <div>
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">找房源</el-menu-item>
                    <el-menu-item index="1">发布房源</el-menu-item>
                    <el-menu-item index="1">房源审核</el-menu-item>
                    <el-menu-item index="1">机构合作</el-menu-item>
                    <el-menu-item index="1">发帖</el-menu-item>
                    <!-- <el-submenu index="2">
                        <template slot="title">我的工作台</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                        <el-submenu index="2-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="2-4-1">选项1</el-menu-item>
                        <el-menu-item index="2-4-2">选项2</el-menu-item>
                        <el-menu-item index="2-4-3">选项3</el-menu-item>
                        </el-submenu>
                    </el-submenu> -->
                </el-menu>
                <div class="line"></div>
            </div>
            <div>
                <div></div>
                <div class="map"></div>
            </div>
        </div>
        <div class="right"></div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>

<style lang='less' scoped>
@import "../../css/create.less";
</style>
