<template>
  <div>
    <el-container>
      <!-- 左侧边栏 -->
      <el-aside width="300px">
        <!-- 侧边栏上半部分 -->
        <div class="aside-top">
            <h3>客户信息</h3>
            <div class="top-main">
              <ul>
                <li>
                  <p>来源</p>
                  <p>电话</p>
                </li>
                <li>
                  <p>来电号码</p>
                  <p>12345678900</p>
                </li>

                <li>
                  <p>反馈方</p>
                  <p>租客</p>
                </li>
                <li>
                  <p>客户姓名</p>
                  <p>王多多</p>
                </li>
                <li>
                  <p>签约号码</p>
                  <el-tag type="info">12345644564</el-tag>
                  <a href="">点保存</a>
                </li>
              </ul>
            </div>

        </div>
        <div class="aside-botton">
            <h3>机构信息</h3>
            <div class="but-main">
              <ul>
                <li>
                  <p>客户姓名</p>
                  <p>王多多</p>
                  <a href="">tupian</a>
                </li>
              </ul>
            </div>
        </div>
      </el-aside>

      <!-- 中间内容转租续租 -->
      <el-main>
        <el-tag class="title">转租续租</el-tag>
        <!-- 类型 -->
        <div class="type">
          <el-tabs type="border-card" >
            <el-tab-pane label="退房">退房</el-tab-pane>
            <el-tab-pane label="转租">
              <el-button type="info">转租流程</el-button>
              <el-button type="info">机构转退租规则</el-button>
              <el-button type="info">租约</el-button>
              <el-button type="info">账单</el-button>
              <el-button type="info">合同</el-button>
            </el-tab-pane>
            <el-tab-pane label="续租">续租</el-tab-pane>
          </el-tabs>
        </div>
        <!-- 转租信息 -->
        <div class="sublet">
          <h4>转租信息</h4>
          <div class="top">
           <ul>
             <li>
                <p>租约ID:</p> <el-tag type="info">123456</el-tag>
                <a href="#">租约历史</a>
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
      <!-- <el-aside width="500px">
       <p>编辑信息</p>
       <el-input
       style="height:400px"
          placeholder="请输入内容"
          >
       </el-input>
      </el-aside> -->
    </el-container>
  </div>

</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
// 左侧边栏
.el-aside {
  ul {
    padding-left: 0;
  }
  background-color: pink;
  padding-left: 10px;
  li > p:nth-of-type(1) {
    color: #666;
    margin-right: 10px;
    display: inline-block;
    width: 90px;
    text-align: right;
  }
  li > p:nth-of-type(2) {
    display: inline-block;
    width: 50px;
    text-align: left;
  }
}
// 主内容部分
.el-main {
  .title {
    background-color: skyblue;
    height: 52px;
    font-size: 18px;
    line-height: 52px;
    color: aquamarine;
    margin-bottom: 10px;
  }

  // 转租信息
  .sublet {
    .cen {
      .el-tag {
        width: 50px;
        margin-left: 20px;
      }
    }
  }
  // ZU租约信息
  .lease {
  }
  border-radius: 30px;
  li {
    padding-bottom: 10px;
  }
  p {
    display: inline-block;
    width: 150px;
    text-align: right;
  }
  .el-tag {
    width: 150px;
    text-align: center;
    margin-right: 20px;
    background-color: #fff;
  }
}
</style>
