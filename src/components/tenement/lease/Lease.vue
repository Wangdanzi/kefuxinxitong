<template>
  <!-- <div>6666666</div> -->
  <div>
    <!-- 基本信息 -->
    <div>
      <h4>基本信息</h4>
      <p>租约id：</p>
      <el-tag type="info">标签三</el-tag>
      <p>未付期数：</p>
      <el-tag type="info">标签三</el-tag>
      <p>协议：</p>
      <el-tag type="info">标签三</el-tag>
      <p>金融渠道：</p>
      <el-tag type="info">标签三</el-tag>
      <p>工作站：</p>
      <el-tag type="info">标签三</el-tag>
      <p>分期：</p>
      <el-tag type="info">标签三</el-tag>
      <p>合同到期时间：</p>
      <el-tag type="info">标签三</el-tag>
      <p>租约维护人：</p>
      <el-tag type="info">标签三</el-tag>
      <p>签约人：</p>
      <el-tag type="info">标签三</el-tag>
      <p>开始日期：</p>
      <el-tag type="info">标签三</el-tag>
      <p>结束日期：</p>
      <el-tag type="info">标签三</el-tag>
      <p>租期时长：</p>
      <el-tag type="info">标签三</el-tag>
      <p>租客姓名：</p>
      <el-tag type="info">标签三</el-tag>
      <p>手机号码：</p>
      <el-tag type="info">标签三</el-tag>
      <p>小区名称：</p>
      <el-tag type="info">标签三</el-tag>
      <p>公寓名称：</p>
      <el-tag type="info">标签三</el-tag>
      <p>信息任务执行状态：</p>
      <el-tag type="info">标签三</el-tag>
      <p>小区地址：</p>
      <el-tag type="info">标签三</el-tag>
      <p>房屋详情：</p>
      <el-tag type="info">标签三</el-tag>
      <p>付款状态：</p>
      <el-tag type="info">标签三</el-tag>
      <p>租约类型：</p>
      <el-tag type="info">标签三</el-tag>
      <p>首次付款时间：</p>
      <el-tag type="info">标签三</el-tag>
      <p>预约审核时间：</p>
      <el-tag type="info">标签三</el-tag>
      <p>退租时间：</p>
      <el-tag type="info">标签三</el-tag>
      <p>流程状态：</p>
      <el-tag type="info">标签三</el-tag>
      <p>逾期天数：</p>
      <el-tag type="info">标签三</el-tag>
      <p>审核状态：</p>
      <el-tag type="info">标签三</el-tag>
      <p>租约状态：</p>
      <el-tag type="info">标签三</el-tag>
    </div>
    <!-- 费用信息 -->
    <div>
      <h4>费用信息</h4>
      <p>单笔租约特别催租天数：</p>
      <el-tag type="info">标签三</el-tag>
      <p>定金：</p>
      <el-tag type="info">标签三</el-tag>
      <p>导客费：</p>
      <el-tag type="info">标签三</el-tag>
      <p>每月固定：</p>
      <el-tag type="info">标签三</el-tag>
      <p>一次性费用：</p>
      <el-tag type="info">标签三</el-tag>
      <p>抄表预收费：</p>
      <el-tag type="info">标签三</el-tag>
      <p>其他费用：</p>
      <el-tag type="info">标签三</el-tag>
      <p>押金：</p>
      <el-tag type="info">标签三</el-tag>
      <p>房东加价：</p>
      <el-tag type="info">标签三</el-tag>
      <p>收费结构：</p>
      <el-tag type="info">标签三</el-tag>
      <p>月付服务费：</p>
      <el-tag type="info">标签三</el-tag>
      <p>首期账单付款金额：</p>
      <el-tag type="info">标签三</el-tag>
      <p>开始日期：</p>
      <el-tag type="info">标签三</el-tag>
      <p>租约合同约定提前天数：</p>
      <el-tag type="info">标签三</el-tag>
      <p>租期(月数)：</p>
      <el-tag type="info">标签三</el-tag>
      <p>交租方式：</p>
      <el-tag type="info">标签三</el-tag>
      <p>支付方式：</p>
      <el-tag type="info">标签三</el-tag>
      <p>月租金：</p>
      <el-tag type="info">标签三</el-tag>
      <p>抵扣费用：</p>
      <el-tag type="info">标签三</el-tag>
      <p>状态：</p>
      <el-tag type="info">标签三</el-tag>
      <p>金融产品：</p>
      <el-tag type="info">标签三</el-tag>
      <p>审核：</p>
      <el-tag type="info">标签三</el-tag>
    </div>
    <!-- 剩余月份 -->
    <div>
      <h4>剩余月份</h4>
      <p>开始时间：</p>
      <el-tag type="info">标签三</el-tag>
      <p>剩余：</p>
      <el-tag type="info">标签三</el-tag>
      <p>金融产品：</p>
      <el-tag type="info">标签三</el-tag>
    </div>
    <!-- 审核历史 -->
    <div>
      <el-table :data="auditData">
        <el-table-column property="date" label="时间"></el-table-column>
        <el-table-column property="name" label="操作员"></el-table-column>
        <el-table-column property="address" label="动作"></el-table-column>
        <el-table-column property="address" label="状态"></el-table-column>
        <el-table-column property="address" label="内容"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="less" scoped>
// @import "./style";
</style>

