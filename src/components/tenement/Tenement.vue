<template>
  <div class="zf-index">
    <!-- tag导航工单编号栏 -->
    <!-- <Layout></Layout> -->
    <div>
      <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
        <el-tab-pane
          :key="item.name"
          v-for="(item, index) in editableTabs"
          :label="item.title"
          :name="item.name"
        >
          <el-container>
            <!-- 引入头部公共部分 -->
            <!-- 左侧边栏 -->
            <el-aside width="300px">
              <!-- 侧边栏上半部分 -->
              <!-- 工单状态 -->
              <div class="zc-state">
                <h3>工单状态</h3>
                <p :v-model="state">待更进</p>
              </div>
              <!-- 客户信息 -->
              <div class="aside-top">
                <h3>客户信息</h3>
                <div class="top-main">
                  <ul>
                    <li>
                      <p>反馈方</p>
                      <p>租客</p>
                    </li>
                    <li>
                      <p>客户姓名</p>
                      <p>王多多</p>
                    </li>
                    <li class="but">
                      <p>签约号码</p>
                      <el-input placeholder="签约号码" v-model="state"></el-input></el-input>
                      <a href>点我保存</a>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- 来电信息 -->
              <div class="zc-incoming">
                <h3>来电信息</h3>
                <div class="incoming">
                  <ul>
                    <li>
                      <p>来电号码：</p>
                      <p>11112341234</p>
                    </li>
                    <li>
                      <p>所在地区：</p>
                      <p>上海</p>
                    </li>
                    <li>
                      <p>被叫号码：</p>
                      <p>025-12345678</p>
                    </li>
                    <li>
                      <p>呼入振铃:</p>
                      <p>00:00:05</p>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- 机构信息 -->
              <div class="aside-botton">
                <h3>机构信息</h3>
                <div class="but-main">
                  <ul>
                    <li>
                      <p>客户姓名</p>
                      <p>王多多</p>
                      <i class="el-icon-phone-outline"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- 历史工单 -->
              <div class="old-order">
                <el-button type="text" @click="dialogTableVisible = true">历史工单</el-button>
                <el-dialog title="历史工单" :visible.sync="dialogTableVisible">
                  <el-table :data="gridData">
                    <el-table-column property="date" label="日期" width="150"></el-table-column>
                    <el-table-column property="name" label="姓名" width="200"></el-table-column>
                    <el-table-column property="address" label="地址"></el-table-column>
                  </el-table>
                </el-dialog>
              </div>
            </el-aside>

            <!-- 中间内容转租续租 -->
            <el-main>
              <!-- 页面标题 -->
              <el-tag class="title">转租续租</el-tag>
              <!-- 类型 -->
              <div class="type">
                <el-tabs type="border-card">
                  <el-tab-pane label="转租">
                    <!-- 点击跳出转租流程弹框 -->
                    <el-button @click="flowPath = true">转租流程</el-button>
                    <el-dialog
                      :visible.sync="flowPath"
                      width="22%"
                      custom-class="bgc"
                      :modal="false"
                      :close-on-click-modal="false"
                    >
                      <h3>转租流程</h3>
                      <div class="one">
                        <h4 style="text-align: center;">转租流程</h4>
                        <p class="text">完成以下转租流程，巴乐兔保障退款</p>
                        <ul>
                          <li>
                            <h5>利用巴乐兔APP提出转租申请</h5>
                            <p>转租将根据您的租合同进行退款</p>
                            <p>房东确认申请，修改出租金额及租期</p>
                          </li>
                          <li>
                            <h5>找新租客，带看租房</h5>
                            <p>普通转租</p>
                            <p>加速转租</p>
                          </li>
                          <li>
                            <h5>转租成功</h5>
                            <p>新租客利用巴乐兔APP签约入住</p>
                            <p>房东确认退款，巴乐兔保障退款</p>
                          </li>
                          <li>
                            <h5>确认收款</h5>
                            <p>查看退款明细，评价整个服务体验</p>
                          </li>
                        </ul>
                      </div>
                    </el-dialog>

                    <!-- 点击跳出机构转退租规则 -->
                    <el-button @click="retreat = true">机构转退租规则</el-button>
                    <el-dialog
                      :visible.sync="retreat"
                      width="22%"
                      custom-class="retreat"
                      :modal="false"
                      :close-on-click-modal="false"
                    >
                      <div>
                        <Organization></Organization>
                      </div>
                    </el-dialog>

                    <!-- 点击跳出租约-->
                    <el-button @click="lease = true">租约</el-button>
                    <el-dialog
                      title="租约"
                      :visible.sync="lease"
                      width="40%"
                      custom-class="bgc"
                      :modal="false"
                      :close-on-click-modal="false"
                    >
                      <div>
                        <Lease></Lease>
                      </div>
                    </el-dialog>

                    <!-- 点击跳出账单 -->
                    <el-button @click="bill = true">账单</el-button>
                    <el-dialog
                      :visible.sync="bill"
                      width="100%"
                      custom-class="retreat"
                      :modal="false"
                      :close-on-click-modal="false"
                    >
                      <div>
                        <Bill></Bill>
                      </div>
                    </el-dialog>
                    <!-- 点击跳出合同 -->
                    <el-button @click="contract = true">合同</el-button>
                    <el-dialog
                      :visible.sync="contract"
                      width="22%"
                      custom-class="bgc"
                      :modal="false"
                      :close-on-click-modal="false"
                    >
                      <h3>合同</h3>
                    </el-dialog>
                  </el-tab-pane>
                  <!-- <el-tab-pane label="续租">续租</el-tab-pane>
                  <el-tab-pane label="退房">退房</el-tab-pane>-->
                </el-tabs>
              </div>

              <!-- 转租信息 -->
              <div class="sublet">
                <h4>转租信息</h4>
                <div class="top">
                  <ul>
                    <!-- 租约ID -->
                    <li>
                      <p>租约ID:</p>
                      <el-tag type="info">123456</el-tag>
                      <el-button type="text" @click="dialogFormVisible = true">历史记录</el-button>
                      <el-dialog :visible.sync="dialogFormVisible" width="1000px" :modal="false">
                        <el-table
                          ref="multipleTable"
                          :data="tableData3"
                          tooltip-effect="dark"
                          style="width: 100%"
                          :modal="false"
                          :close-on-click-modal="false"
                          @selection-change="handleSelectionChange"
                        >
                          <el-table-column type="selection" width="55"></el-table-column>
                          <el-table-column label="租约编号" width="120">
                            <template slot-scope="scope">{{ scope.row.date }}</template>
                          </el-table-column>
                          <el-table-column prop="name" label="租约开始时间" width="120"></el-table-column>
                          <el-table-column prop="address" label="房东姓名" show-overflow-tooltip></el-table-column>
                          <el-table-column prop="add" label="签约房源地址" show-overflow-tooltip></el-table-column>
                        </el-table>
                        <div slot="footer" class="dialog-footer">
                          <el-button @click="dialogFormVisible = false">取 消</el-button>
                          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                        </div>
                      </el-dialog>
                    </li>
                    <!-- 租约状态 -->
                    <li>
                      <p>转租状态:</p>
                      <el-tag type="info">寻找新客户中</el-tag>
                      <el-button type="text" @click="particulars = true">转租记录详情</el-button>
                      <el-dialog
                        title="进度记录"
                        :visible.sync="particulars"
                        width="1000px"
                        :modal="false"
                      >
                        <!-- 转租想详情记录弹框表格第一个  -->
                        <el-table :data="scheduleData" border style="width: 100%">
                          <el-table-column prop="date" label="时间" width="180"></el-table-column>
                          <el-table-column prop="name" label="内容" width="180"></el-table-column>
                          <el-table-column prop="address" label="操作人"></el-table-column>
                        </el-table>
                        <!-- 转租想详情记录弹框表格第二个  -->
                        <el-table :data="disposeData" border style="width: 100%">
                          <el-table-column prop="date" label="时间" width="180"></el-table-column>
                          <el-table-column prop="name" label="内容" width="180"></el-table-column>
                          <el-table-column prop="address" label="操作人"></el-table-column>
                        </el-table>
                      </el-dialog>
                    </li>
                  </ul>
                </div>
                <div class="but">
                  <ul>
                    <li>
                      <p>申请时间：</p>
                      <el-tag type="info">123456</el-tag>
                      <p>更新时间：</p>
                      <el-tag type="info">789456</el-tag>
                    </li>
                    <li>
                      <p>成功时间：</p>
                      <el-tag type="info">147258</el-tag>
                      <p>退租时间：</p>
                      <el-tag type="info">369852</el-tag>
                    </li>
                  </ul>
                </div>
                <div class="cen">
                  <ul>
                    <li>房东回复转租申请：
                      <el-tag type="info">yes</el-tag>是否申请管家代管：
                      <el-tag type="info">no</el-tag>房东回复房单：
                      <el-tag type="info">yep</el-tag>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- 租约信息 -->
              <div class="lease">
                <h4>租约信息</h4>
                <div class="top">
                  <ul>
                    <li>
                      <p>租期：</p>
                      <el-tag type="info">147258</el-tag>至
                      <el-tag type="info" style=" margin-left: 20px;">147258</el-tag>
                    </li>
                    <li>
                      <P>最后付款账期：</P>
                      <el-tag type="info">147258</el-tag>至
                      <el-tag type="info" style=" margin-left: 20px;">147258</el-tag>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <p>交租方式：</p>
                      <el-tag type="info">147258</el-tag>
                    </li>
                    <li>
                      <p>月租金：</p>
                      <el-tag type="info">147258</el-tag>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <p>机构转租要求提前：</p>
                      <el-tag type="info" style="width:50px">18</el-tag>天
                    </li>
                    <li>
                      <p>房源地址：</p>
                      <el-tag type="info">你是我的眼带我领略</el-tag>
                    </li>
                  </ul>
                </div>
              </div>
            </el-main>

            <!-- 右侧边栏 -->
            <el-aside width="400px">
              <p>编辑信息</p>
              <!-- 编辑框 -->
              <el-form ref="form" :model="sizeForm" label-height="100px" size:medium>
                <el-form-item>
                  <el-input v-model="editContent" type="textarea" class="nuo" placeholder="请输入内容"></el-input>
                </el-form-item>
                <div class="ce">
                  <!-- 时间日期 -->
                  <div class="time">
                    <p style="display:inline-block ;margin-right:20px">代办时间：</p>
                    <el-date-picker
                      v-model="value1"
                      type="datetime"
                      size="10px"
                      placeholder="选择日期时间"
                    ></el-date-picker>
                  </div>
                  <!-- 短信推送 -->
                  <div style="margin-top:10px;display:block;">
                    <el-checkbox fill v-model="checked">短信推送转租流程</el-checkbox>
                  </div>
                  <!-- 工单是否已解决 -->
                  <div>
                    <span>工单是否已解决</span>
                    <el-select v-model="value">
                      <el-option v-for="item in options" :key="item.value" :value="item.value"></el-option>
                    </el-select>
                  </div>
                </div>
                <el-form-item class="but">
                  <el-button @click="confirm">确定</el-button>
                </el-form-item>
              </el-form>
            </el-aside>
          </el-container>
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- 转移技能组 -->
    <div class="transfer">
      <el-button @click="transfer = true">转移技能组</el-button>
      <el-dialog
        :visible.sync="transfer"
        width="22%"
        custom-class="bgc"
        :modal="false"
        :close-on-click-modal="false"
      >
        <h3>转移技能组</h3>
        <el-input v-model="content" placeholder="选填"></el-input>
        <el-button @click="transferjn">确定</el-button>
        <el-button @click="transfer=false">取消</el-button>
      </el-dialog>
    </div>

    <!-- 点击保存弹出记录框-->
    <div class="save" >
      <AllRecord></AllRecord>
    </div>

  </div>
</template>

<script>
// 公共头部
import Layout from "../common/Layout";
// 租约
import Lease from "./lease/Lease";
// 账单
import Bill from "./bill/Bill";
// 机构转退租规则
import Organization from "./organization/Organization";
// 点击保存弹出记录框
import AllRecord from "../common/AllRecord/AllRecord"

import cishi from "./cishi";
export default {
  data() {
    return {
      // tab导航栏
      editableTabsValue: "2",
      editableTabs: [
        {
          title: "Tab 1",
          name: "1"
        },
        {
          title: "Tab 2",
          name: "2",
          content: "Tab 2 content"
        }
      ],
      tabIndex: 2,

      pickerOptions1: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value1: "",
      value2: "",
      value3: "",
      // 左侧边栏点击保存签约号码
      input: "",
      // 返回短信推送流程
      checked: true,
      // 侧边栏表单
      sizeForm: {
        name: ""
      },
      // 点击转租流程跳出对话框
      flowPath: false,
      // 点击机构转退租规则跳出对话框
      retreat: false,
      // 点击租约跳出对话框
      lease: false,
      // 点击账单跳出对话框
      bill: false,
      // 点击合同跳出对话框
      contract: false,
      // 点击租约历史跳出对话框
      formLabelWidth: "1000px",
      dialogTableVisible: false,
      dialogFormVisible: false,
      // 历史纪录的表格
      gridData: [
        {
          date: "历史记录",
          name: "历史记录",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      particulars: false,
      multipleSelection: [],
      // 转租想详情记录弹框表格第一个
      scheduleData: [
        {
          date: "2016-05-02",
          name: "进度记录",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      disposeData: [
        {
          date: "2016-05-02",
          name: "客服处理记录",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      // 右侧边栏工单是否解决
      options: [
        {
          value: "已解决"
        },
        {
          value: "为解决"
        }
      ],
      value: "已解决",
      // 转移技能组
      transfer: false,
      content: "",
      editContent: ""
    };
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // tab导航栏
    handleTabsEdit(targetName, action) {
      if (action === "add") {
        let newTabName = ++this.tabIndex + "";
        this.editableTabs.push({
          title: "New 2222",
          name: newTabName,
          content: "<div>121</div>"
        });
        this.editableTabsValue = newTabName;
      }
      if (action === "remove") {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    },
    //点击转移技能组确定按钮在编辑框显示内容
    transferjn() {
      this.editContent = "转移技能组";
      this.transfer = false;
      this.content = "";
    },
    // 点击最后的确认按钮
    confirm() {
      this.state = "已解决";
      this.editContent = "";
      this.save=''
    }
  },
  // 组建引入配置
  components: {
    Layout,
    Lease,
    Bill,
    cishi,
    Organization,
    AllRecord,
  }
};

// components
</script>

<style lang="less" scoped>
@import "./style.less";
</style>
