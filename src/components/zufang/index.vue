<template>
  <div class="zf-index">
    <el-container>
      <!-- 左侧边栏 -->
      <el-aside width="300px">
        <!-- 侧边栏上半部分 -->
        <!-- 工单状态 -->
        <div class="zc-state">
          <h3>工单状态</h3>
          <p>待更进</p>
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
                  <el-input  placeholder="签约号码"></el-input>
                  <a href="">点我保存</a>
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
        <!-- 房东信息 -->
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

        </div>
      </el-aside>

      <!-- 中间内容转租续租 -->
      <el-main>
        <!-- 页面标题 -->
        <el-tag class="title">转租续租</el-tag>
        <!--  -->
        <!-- 类型 -->
        <div class="type">
          <el-tabs type="border-card" >
            <el-tab-pane label="转租">
              <el-button  @click="flowPath = true">转租流程</el-button>
               <!-- 点击跳出转租流程弹框 -->
                <el-dialog
                  :visible.sync="flowPath"
                  width="22%"
                  custom-class="bgc"
                  :modal="false"
                  :close-on-click-modal="false">
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
              <el-button @click="retreat = true">机构转退租规则</el-button>
               <!-- 点击跳出转租流程弹框 -->
                <el-dialog
                  :visible.sync="retreat"
                  width="22%"
                  custom-class="retreat"
                  :modal="false"
                  :close-on-click-modal="false">
                  <h3>机构转退租规则</h3>
                  <div class="one">

                    <ul class="retreat">
                      <li class="top">
                        机构：月利(分散式)-有效
                      </li>
                      <li>
                        <h3>退租规则</h3>
                        <h5>租满退租：</h5>
                        <p>提前30天通知房东</p>
                        <p>退款是否接受垫付：是</p>
                        <p>退款扣费项：清洁费 () 水电费 ()</p>

                        <h5>租期中退租：</h5>
                        <p>退还租赁保证金 (否) </p>
                        <p>剩余租金按 (日) 退还</p>
                        <p>提前 (30) 天通知房东</p>
                      </li>
                      <li>
                        <h3>转租规则</h3>
                        <p>是否接受转租退款：是</p>
                        <p>转退租联系人：张三</p>
                        <br>
                        <p>剩余租金退还：按日退还</p>
                        <p>转退租联系人：张三</p>



                        <h5>转租服务费计算规则：</h5>
                        <p>自主转租：</p>
                        <p>管家代找：</p>
                        <p>清洁费：</p>
                        <p>水电网煤：</p>
                       </li>
                    </ul>
                  </div>
                </el-dialog>
              <el-button>租约</el-button>
              <el-button>账单</el-button>
              <el-button>合同</el-button>
            </el-tab-pane>
            <el-tab-pane label="续租">续租</el-tab-pane>
            <el-tab-pane label="退房">退房</el-tab-pane>
            <el-tab-pane label="退转续组其他类别">
              <el-button>退房</el-button>
              <el-button>续租</el-button>
            </el-tab-pane>
          </el-tabs>
        </div>
        <!-- 转租信息 -->
        <div class="sublet">
          <h4>转租信息</h4>
          <div class="top">
           <ul>
             <li>
                <p>租约ID:</p> <el-tag type="info">123456</el-tag>
                <!-- <a href="#">租约历史</a> -->
                <el-button type="text" @click="dialogTableVisible = true">租约历史</el-button>
                <el-dialog
                  :visible.sync="dialogTableVisible"
                  :modal="false"
                  width="80%"
                  show-close="false"
                  :close-on-click-modal="false" >

                    <el-table
                      ref="multipleTable"
                      :data="tableData3"
                      tooltip-effect="dark"
                      style="width: 100%">
                      <el-table-column
                        type="selection"
                        width="55">
                      </el-table-column>
                      <el-table-column
                        label="租约编号"
                        width="120">
                        <template slot-scope="scope">{{ scope.row.date }}</template>
                      </el-table-column>
                      <el-table-column
                        prop="name"
                        label="租约开始时间"
                        width="120">
                      </el-table-column>
                      <el-table-column
                        prop="address"
                        label="租约结束时间"
                        show-overflow-tooltip>
                      </el-table-column>
                      <el-table-column
                        prop="address"
                        label="房东姓名"
                        show-overflow-tooltip>
                      </el-table-column>
                      <el-table-column
                        prop="address"
                        label="签约房源地址"
                        show-overflow-tooltip>
                      </el-table-column>


                    </el-table>
                </el-dialog>
             </li>
             <li>
                <p>转租状态:</p> <el-tag type="info">寻找新客户中</el-tag>
                <a href="#">记录详情</a>
             </li>
           </ul>
          </div>
          <div class="but">
            <ul>
              <li>
                <p>申请时间：</p><el-tag type="info">123456</el-tag>
                <p>更新时间：</p><el-tag type="info">789456</el-tag>
              </li>
              <li>
                <p>成功时间：</p><el-tag type="info">147258</el-tag>
                <p>退租时间：</p><el-tag type="info">369852</el-tag>
              </li>
            </ul>
          </div>
          <div class="cen">
            <ul>
              <li>
                房东回复转租申请：<el-tag type="info">yes</el-tag>
                是否申请管家代管：<el-tag type="info" >no</el-tag>
                房东回复房单：<el-tag type="info" >yep</el-tag>
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
               <el-tag type="info">147258</el-tag>
                至
               <el-tag type="info" style=" margin-left: 20px;">147258</el-tag>
              </li>
              <li>
                <P>最后付款账期：</P>
               <el-tag type="info">147258</el-tag>
                至
               <el-tag type="info" style=" margin-left: 20px;">147258</el-tag>
              </li>
            </ul>
            <ul>
              <li>
                <p>交租方式：</p>
                <el-tag type="info">147258</el-tag>
              </li>
              <li>
               <p> 月租金：</p>
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
      <el-aside width="400px" >
       <p>编辑信息</p>
       <!-- 编辑框 -->

       <el-form ref="form" :model="sizeForm" label-height="100px" size:medium>
          <el-form-item>
            <el-input
                type="textarea"
                class="nuo"
                placeholder="请输入内容"
                >
            </el-input>
          </el-form-item>
          <div class="ce">
            <div class="time">
              <p style="display:inline-block ;margin-right:20px">代办时间：</p>
              <!-- 时间日期 -->
              <el-date-picker
              v-model="value1"
              type="datetime"
              size="10px"

              placeholder="选择日期时间">
             </el-date-picker>
            </div>
              <!-- 短信推送 -->
            <div style="margin-top:10px;display:block;">
              <el-checkbox fill v-model="checked">
              IM短信推送转租流程
              </el-checkbox >
            </div>
          </div>
          <el-form-item class="but">
             <el-button type="primary">保存</el-button>
             <el-button>已解决</el-button>
          </el-form-item>
       </el-form>

      </el-aside>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions1: {
        shortcuts: [
          {
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date())
            }
          },
          {
            text: '昨天',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          },
          {
            text: '一周前',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }
        ]
      },
      value1: '',
      value2: '',
      value3: '',
      // 左侧边栏点击保存签约号码
      input: '',
      // 返回短信推送流程
      checked: true,
      // 侧边栏表单
      sizeForm: {
        name: ''
      },
      // 点击转租流程跳出对话框
      flowPath: false,
      // 点击转租流程跳出对话框
      retreat: false,
      // 点击租约历史跳出对话框
      tableData3: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      multipleSelection: [],

      dialogTableVisible: false,
      dialogFormVisible: false
    }
  }
}
</script>

<style lang=less>
.el-dialog__header {
  padding: 0;
}
.el-dialog__body {
  padding: 0;
  background-color: #e0ecff;
  border: 1px solid #99ccff;
  /* width: 400px; */
}
.el-input__inner {
  width: 145px;
}
.el-textarea__inner {
  height: 300px;
}
.el-input {
  width: 0;
  margin-left: 0;
}
</style>

<style lang="less" scoped>
@import '../../css/style.less';
</style>
