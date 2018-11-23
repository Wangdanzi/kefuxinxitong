<template>
     <div class="main">
       <h3>转租流程</h3>
       <div class="one">
         <h4 style="text-align: center;">转租流程</h4>
         <p style="text-align: center; font-size:14px;  padding-top:5px;">完成以下转租流程，巴乐兔保障退款</p>
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
     </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>

<style lang="less"  scoped>
.main {
  * {
    margin: 0;
    padding: 0;
  }
  width: 400px;
  // height: 400px;
  border: 1px solid red;
  // background-color: #fff;
  h3 {
    padding: 10px 0 0 5px;
    color: aqua;
  }
  .one {
    border: 1px solid #000;
    background-color: #fff;
    padding: 30px 0;
    margin: 20px;
    li {
      margin-top: 20px;
      margin-left: 85px;
    }
    p:nth-of-type(1),
    p:nth-of-type(2) {
      font-size: 10px;
      color: #666;
    }
    p:nth-of-type(1) {
      margin: 5px 0;
    }
  }
}
</style>
