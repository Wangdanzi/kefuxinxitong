<template>
  <!-- 账单表格 -->
  <div>
    <h3>租约收入流水</h3>
    <el-table :data="billData" border style="width: 100%">
      <el-table-column prop="date" label="项目" width="80"></el-table-column>
      <el-table-column prop="name" label="期数" width="80"></el-table-column>
      <el-table-column prop="address" label="金额"></el-table-column>
      <el-table-column prop="address" label="优惠券 金额"></el-table-column>
      <el-table-column prop="date" label="已付金额" width="80"></el-table-column>
      <el-table-column prop="name" label="服务费" width="80"></el-table-column>
      <el-table-column prop="address" label="租金"></el-table-column>
      <el-table-column prop="address" label="每月固定"></el-table-column>
      <el-table-column prop="name" label="一次性" width="80"></el-table-column>
      <el-table-column prop="address" label="抄表"></el-table-column>
      <el-table-column prop="address" label="押金"></el-table-column>
      <el-table-column prop="date" label="房东加价" width="80"></el-table-column>
      <el-table-column prop="name" label="收入退款" width="80"></el-table-column>
      <el-table-column prop="address" label="逾期服务费"></el-table-column>
      <el-table-column prop="address" label="付方"></el-table-column>
      <el-table-column prop="address" label="收方"></el-table-column>
      <el-table-column prop="address" label="结算开始日"></el-table-column>
      <el-table-column prop="name" label="结算截止日" width="80"></el-table-column>
      <el-table-column prop="address" label="公寓要求交租日"></el-table-column>
      <el-table-column prop="address" label="实际交易日"></el-table-column>
      <el-table-column prop="date" label="已收款、未收款、虚拟核销" width="80"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 点击账单跳出对话框
      // <!-- 账单表格 -->
      billData: [
        {
          date: "",
          name: "账单",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  }
};
</script>

<style>
</style>
