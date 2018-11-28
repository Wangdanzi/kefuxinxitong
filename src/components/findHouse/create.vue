<template>
    <el-container>
    <el-aside width="200px" class="side">
        <div class="sideMsg">
                <div class="side-in">
                    <span>来电号码:</span>
                    <span>{{phone}}</span>
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
    </el-aside>
    <el-main class="main">
        <div class="banner">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">找房源</el-menu-item>
                <el-menu-item index="2">发布房源</el-menu-item>
                <el-menu-item index="3">房源审核</el-menu-item>
                <el-menu-item index="4">机构合作</el-menu-item>
                <el-menu-item index="5">发帖</el-menu-item>
            </el-menu>
        </div>
        <div class="from">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="电话" style="margin-right:55px">
                    <el-input v-model="formInline.user" placeholder="" style="width:107%;"></el-input>
                </el-form-item>
                <el-form-item label="备用电话" style="margin-right:55px">
                    <el-input v-model="formInline.user" placeholder="" style="width:107%"></el-input>
                </el-form-item>
                <el-form-item label="姓名" style="margin-right:44px">
                    <el-input v-model="formInline.user" placeholder="" style="width:107%"></el-input>
                </el-form-item>
                    <el-form-item label="姓别">
                    <el-radio v-model="radio" label="1">男</el-radio>
                    <el-radio v-model="radio" label="2">女</el-radio> 
                    </el-form-item>      
                <el-form-item label="城市" style="margin-right:41px">
                    <el-select v-model="formInline.region">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="入住人数" style="margin-right:41px">
                    <el-select v-model="formInline.region">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="地铁" style="margin-right:28px">
                    <el-select v-model="formInline.region">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="预算">
                    <el-select v-model="formInline.region">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="户型" style="margin-right:38px">
                    <el-select v-model="formInline.region">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="位置" style="width:74%">
                    <el-select v-model="formInline.region" style="margin-left:30px;">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item style="display:block">
                    <span>单选:</span>
                     <el-radio-group v-model="radio2">
                        <el-radio :label="3" >整租</el-radio>
                        <el-radio :label="6">合租</el-radio>
                        <el-radio :label="10">公寓</el-radio>
                        <el-radio :label="9">线路规划</el-radio>
                    </el-radio-group>
               </el-form-item>
                <el-form-item class="checkout" style="display:inline-block">
                    <span>多选:</span>
                    <el-checkbox-group v-model="checkList" style="display:inline-block">
                        <el-checkbox label="带阳台" style="margin-left:31px"></el-checkbox>
                        <el-checkbox label="独立厨房"></el-checkbox>
                        <el-checkbox label="独卫"></el-checkbox>
                        <el-checkbox label="朝南"></el-checkbox>
                        <el-checkbox label="电梯房"></el-checkbox>
                        <el-checkbox label="主卧"></el-checkbox>
                        <el-checkbox label="实体房"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item class="clear">
                    <el-button type="primary" @click="onSubmit">清空</el-button>
                </el-form-item>
                <el-form-item class="search">
                    <el-button type="primary" @click="onSubmit">搜索</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-main>
    <el-aside  style="background-color:#fff" class="right">
        <el-dropdown class="right-content" hide-timeout:3000>
            <span class="el-dropdown-link">
                下拉菜单
                <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>安排拓客带看</el-dropdown-item>
                <el-dropdown-item>推送下载链接</el-dropdown-item>
                <el-dropdown-item>转移技能组</el-dropdown-item>
                <el-dropdown-item>添加处理记录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        
        <div> 
            <div class="date">
                <div class="block">
                    <span class="demonstration">入住时间：</span>
                    <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择日期">
                    </el-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">看房时间：</span>
                    <el-date-picker
                    v-model="value2"
                    type="date"
                    placeholder="选择日期">
                    </el-date-picker>
                </div>
            </div>
            <p>拓客备注描述</p>
        </div>
        <p style="margin-top:50px;display:none">工单描述</p>
        <div id="textarea">
            <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="请输入内容"
            v-model="textarea3">
            </el-input>
        </div>
    </el-aside>
    </el-container>
</template>

<script>
export default {
    data () {
        return {
            phone:"18621618821",
            activeIndex: '1',
            activeIndex2: '1',
            radio: '1',
            radio2:3,//默认选项
            value1: '',//时间插件
            value2: '',//时间插件
            textarea3:'',
            checkList: ['带阳台','主卧'],
            formInline: {
                user: '',
                region: ''
            }
        }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      onSubmit() {
        console.log('submit!');
      }
    }
};
</script>
<style>
#textarea .el-textarea textarea{/* 改变文本域中的行内样式 */
    min-height:120px!important;
    height:120px!important;
 }
</style>
<style lang='less' scoped>
@import "../../css/create.less";
</style>
