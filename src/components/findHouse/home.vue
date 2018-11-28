<template>
    <div>
        <div>
            <div class="head">
                <p>我的工作台</p>
                <div class="number">
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
                        <el-menu-item index="/home/followUP" class="followUp content" @click="followUpMethod">
                            <div>2</div>
                            <div>今日待跟进工单</div>
                        </el-menu-item>
                        <el-menu-item index="/home/appointment" class="wait content" >
                            <div>2</div>
                            <div>预约代办的工单</div>
                        </el-menu-item>
                        <el-menu-item index="/home/resolved" class="wait content">
                            <div>2</div>
                            <div>我已解决的工单</div>
                        </el-menu-item>
                        <el-menu-item index="/home/resolved" class="wait content">
                            <div>2</div>
                            <div>我已申请关闭的工单</div>
                        </el-menu-item>
                        <el-menu-item index="/home/resolved" class="wait content">
                            <div>2</div>
                            <div>我已关闭的工单</div>
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
                        <el-input v-model="formInline.mobile"></el-input>
                    </el-form-item>
                    <el-form-item label="客户姓名">
                        <el-input v-model="formInline.user"></el-input>
                    </el-form-item>
                    <el-form-item label="反馈方">
                        <el-select v-model="formInline.region">
                            <el-option label="全部" value="shanghai"></el-option>
                            <el-option label="租客" value="beijing"></el-option>
                            <el-option label="机构" value="beijing"></el-option>
                            <el-option label="其他" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="租约ID">
                        <el-input v-model="formInline.user"></el-input>
                    </el-form-item>
                    <el-form-item label="满意度调查">
                        <el-select v-model="formInline.region">
                            <el-option label="发送" value="send"></el-option>
                            <el-option label="未发送" value="unSend"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item class="search">
                        <el-button type="primary">清空</el-button>
                    </el-form-item>
                     <el-form-item>
                        <el-button type="primary" @click="centerDialogVisible =true">满意度调查</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">创建工单</el-button>
                    </el-form-item>
                     <el-form-item>
                        <el-button type="primary">搜索</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <el-dialog
                :visible.sync="centerDialogVisible" :close-on-click-modal="false"
                width="30%"
                center>
                <span style="text-align:center">{{modelText}}</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="centerDialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
                </span>
            </el-dialog>
            <el-dialog
                :visible.sync="centerDialogVisibleStatus" :close-on-click-modal="false"
                width="30%"
                center>
                <span style="text-align:center">{{modelStatusText}}</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="centerDialogVisibleStatus = false">取 消</el-button>
                    <el-button type="primary" @click="centerDialogVisibleStatus = false">确 定</el-button>
                </span>
            </el-dialog>
            <div class="from" >
                <el-table :data="tableData4" border stripe fi style="width: 100%" max-height="500">
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column fixed prop="number" label="工单编号" width="150"></el-table-column>
                    <el-table-column prop="classify" label="list" width="150"></el-table-column>
                    <el-table-column prop="status" label="状态" width="150"></el-table-column>
                    <el-table-column prop="from" label="来源" width="150"></el-table-column>
                    <el-table-column prop="feedback" label="反馈方" width="150"></el-table-column>
                    <el-table-column prop="customerName" label="客户姓名" width="150"></el-table-column>
                    <el-table-column prop="tel" label="来电号码" width="150"></el-table-column>
                    <el-table-column prop="creatTime" label="创建时间" width="180"></el-table-column>
                    <el-table-column prop="chargeTime" label="代办时间" width="180"></el-table-column>
                    <el-table-column prop="satisation" label="满意度调查" width="180"></el-table-column>
                    <el-table-column fixed="right" label="操作" width="200">
                        <template slot-scope="scope">
                            <el-button type="text" size="small">详情</el-button>
                            <el-button type="text" size="small">申请关闭</el-button>
                            <el-button type="text" size="small" @click="centerDialogVisibleStatus =true">更改状态</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <!-- <followUp></followUp> -->
        </div>
    </div>
    
</template>
<script>
import followUp from "../findHouse/followUp";
import appointment from "../findHouse/appointment";
import resolved from "../findHouse/resolved.vue";
export default {
  data() {
    return {
      formInline: {
        //表单数据
        mobile:"电话",
        region: ""
      },
      activeIndex: '1',
      activeIndex2: '1',
      followUp:"true",
      appointment:'false',
      resolved:"false",
     centerDialogVisible: false,//模态框
     modelText:"是否发送满意度调查？",//模态框内容，点击确认时调接口去改变状态（已发送/未发送）
     centerDialogVisibleStatus:false,
     modelStatusText:'确定更改为"已解决"状态吗?',
     tableData4: [
            {//表格数据
            number: '2016-05-03',
            classify: '王小虎',
            status:'待跟进',
            from:'电话',
            feedback:'租客',
            customerName:'罗格格',
            tel:'11111111111',
            creatTime:'2018-10-28 20:05:00',
            chargeTime:'2018-10-28 20:05:00',
            satisation:'已发送',
            }, {
            number: '2016-05-03',
            classify: '王小虎',
            status:'待跟进',
            from:'电话',
            feedback:'租客',
            customerName:'罗格格',
            tel:'11111111111',
            creatTime:'2018-10-28 20:05:00',
            chargeTime:'2018-10-28 20:05:00',
            satisation:'已发送',
            }, {
            number: '2016-05-03',
            classify: '王小虎',
            status:'待跟进',
            from:'电话',
            feedback:'租客',
            customerName:'罗格格',
            tel:'11111111111',
            creatTime:'2018-10-28 20:05:00',
            chargeTime:'2018-10-28 20:05:00',
            satisation:'已发送',
            }, {
            number: '2016-05-03',
            classify: '王小虎',
            status:'待跟进',
            from:'电话',
            feedback:'租客',
            customerName:'罗格格',
            tel:'11111111111',
            creatTime:'2018-10-28 20:05:00',
            chargeTime:'2018-10-28 20:05:00',
            satisation:'已发送',
            }, {
            number: '2016-05-03',
            classify: '王小虎',
            status:'待跟进',
            from:'电话',
            feedback:'租客',
            customerName:'罗格格',
            tel:'11111111111',
            creatTime:'2018-10-28 20:05:00',
            chargeTime:'2018-10-28 20:05:00',
            satisation:'已发送',
            }, {
            number: '2016-05-03',
            classify: '王小虎',
            status:'待跟进',
            from:'电话',
            feedback:'租客',
            customerName:'罗格格',
            tel:'11111111111',
            creatTime:'2018-10-28 20:05:00',
            chargeTime:'2018-10-28 20:05:00',
            satisation:'已发送',
            }
         ],
    };
  },
  components:{
    followUp,
    resolved,
    appointment,
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
    },
    centerDialogVisible(){
        this.modelText="123";
    },
  }
};
</script>
 <style>
    .el-select>.el-input{
        width: 80%;
    }
    button--primary:active{
        background-color: #66CBFF;
    }
   .el-dialog--center .el-dialog__body{
       text-align: center;
       font-size: 20px;
       font-family:"微软雅黑";
   }
  .el-dialog{
      margin-top:30vh!important;
  }
 </style>
 
 <style lang="less" scoped>
@import "../../css/home.less";
</style>

