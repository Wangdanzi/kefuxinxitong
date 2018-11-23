<template>
     <div class="main">
       <h3>机构转退租规则</h3>
       <div class="one">
         <h4 style="text-align: center;">转租流程</h4>
         <p style="text-align: center; font-size:14px;  padding-top:5px;">完成以下转租流程，巴乐兔保障退款</p>
         <ul>
           <li>
             <h3>退租规则</h3>
             <h5>租满退租</h5>
             <p>提前30天通知房东</p>
             <p>退款是否接受垫付：是</p>
             <p>退款扣费项：清洁费 () 水电费 ()</p>

             <h5>租期中退租</h5>
             <p>退还租赁保证金 (否) </p>
             <p>剩余租金按 (日) 退还</p>
             <p>提前 (30) 天通知房东</p>
           </li>
           <li>
             <h3>转租规则</h3>
             <p>是否接受转租退款：是</p>
             <p>剩余租金退还：按日退还</p>
             <p>转退租联系人：张三</p>
             <p>剩余租金退还：按日退还</p>

             <h5>转租服务费计算规则：</h5>
             <p>自主转租：</p>
             <p>管家代找：</p>
             <p>清洁费：</p>
             <p>水电网煤：</p>
            </li>
         </ul>
       </div>
     </div>
</template>

<script>
export default {}
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
