<template>
  <div class="users">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item to="/users">所有工单</el-breadcrumb-item>
      <el-breadcrumb-item>今日待跟进</el-breadcrumb-item>
    </el-breadcrumb>
  <div class="inputs">
    <el-form :inline="true" label-width=100px class="demo-form-inline">
      <el-form-item label="受理员工">
        <el-input ></el-input>
      </el-form-item>
   
      <el-form-item label="来电号码">
        <el-input ></el-input>
      </el-form-item>
      
      <el-form-item label="创建时间">
        <el-input ></el-input>
      </el-form-item>
      <el-form-item label="工单类型"   >
        <el-select v-model="formInline.region">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
       </el-select>
      </el-form-item>
      <el-form-item label="客户姓名">
        <el-input ></el-input>
      </el-form-item>
      <el-form-item label="工单编号">
        <el-input ></el-input>
      </el-form-item>
      <el-form-item label="工单状态">
        <el-input ></el-input>
      </el-form-item>
      <el-form-item label="反馈方" >
        <el-select v-model="feedback">
          <el-option label="租客" value="tenant"></el-option>
          <el-option label="机构" value="organization"></el-option>
          <el-option label="其他" value="other"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="租约ID">
        <el-input ></el-input>
      </el-form-item>
      <el-form-item label="更新时间">
        <el-input ></el-input>
      </el-form-item>
      <el-form-item label="满意度调查" >
        <el-select v-model="satisfaction">
          <el-option label="全部" value="all"></el-option>
          <el-option label="不满意查询结果" value="no"></el-option>
          <el-option label="不满意服务人员" value="11"></el-option>
          <el-option label="不满意房东" value="22"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
     <el-button style="float: right; margin-left:10px" type="success" plain>关闭工单</el-button>
     <el-button style="float: right" type="success" plain>查找</el-button>
     <el-button style="float: right" type="success" plain>满意度调查</el-button>
     <el-button style="float: right" type="success" plain>导出</el-button>
     <el-button style="float: right" type="success" plain>清空</el-button>
 
    </div>
    <!-- 表格展示功能 -->
    <!-- el-table:表格组件 -->
    <!-- :data="tableData": 需要给表格组件传递数据 -->
    <!-- prop： 这一列对应的数据的属性名 -->
  <div style="margin-top:50px">
    <el-table
    ref="multipleTable"
    :data="tableData3"
    border
    stripe>
    <el-table-column
      type="selection"
      width="30">
    </el-table-column>
    <el-table-column
      label="编号"
       width="50"
      >
      <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
    </el-table-column>
    <el-table-column
      prop="name"
      label="反馈方"
       width=""
      >
    </el-table-column>
    <el-table-column
      prop="name"
      label="客户姓名"
     >
    </el-table-column>
    <el-table-column
      prop="name"
      label="来电号码"
      width="">
    </el-table-column>
    <el-table-column
      prop="name"
      label="城市"
      width="">
    </el-table-column>
    <el-table-column
      prop="name"
      label="机构名称"
      width="">
    </el-table-column>
    <el-table-column
      prop="name"
      label="创建时间"
      width="">
    </el-table-column>
    <el-table-column
      prop="name"
      label="更新时间"
      width="">
    </el-table-column>
    <el-table-column
      prop="name"
      label="租约ID"
      width="">
    </el-table-column>
    <el-table-column
      prop="name"
      label="技能组"
      width="">
    </el-table-column>
    <el-table-column
      prop="name"
      label="工单类型"
      width="">
    </el-table-column>
    <el-table-column
      prop="name"
      label="工单状态"
      width="">
    </el-table-column>
    <el-table-column
      prop="name"
      label="受理员工"
      width="">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      >
      <template slot-scope="scope">
        <el-button
          type="text"
          @click="Roles.vue"
          size="small">
          详情
        </el-button>
      </template>
    </el-table-column>
    <router-view/>
  </el-table>
  </div>
  </div>
 
</template>

<script>
// const BASE_URL = 'http://localhost:8888/api/private/v1/'
export default {
  data() {
    return {
      // 用户的列表数据
      userList: [],
      // 反馈方下拉框
      feedback: {
        user: '',
        region: ''
      },
      formInline: {
        user: '',
        region: ''
      },
      // 客户满意度下拉框
      satisfaction: {
        user: '',
        region: ''
      },

      tableData3: [
        {
          date: '',
          name: '',
          address: ''
        },
        {
          date: '',
          name: '',
          address: ''
        },
        {
          date: '',
          name: '',
          address: ''
        }
      ],
      multipleSelection: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    // 获取用户列表信息
    async getUserList() {
      // 发送ajax请求，获取用户列表数据
      let res = await this.axios({
        method: 'get',
        // baseURL: BASE_URL,
        url: 'users',
        params: {
          query: this.query,
          pagenum: this.currentPage,
          pagesize: this.pageSize
        }
      })
      // console.log(res)
      let {
        meta: { status },
        data: { users, total }
      } = res
      if (status === 200) {
        this.userList = users
        this.total = total
      }
    },
    handleCurrentChange(val) {
      // val就是当前页
      // console.log(val)
      // 修改当前页
      this.currentPage = val
      // 重新发送ajax请求获取数据
      this.getUserList()
    }
  }
}
</script>

<style lang="scss" scoped>
.el-breadcrumb {
  // margin-bottom: 20px;
  font-size: 20px;
}
.el-input {
  width: 150px;
}
.el-menu-vertical-demo {
  border: #000;
}
.biankuang {
  margin-top: 10px;
}
</style>
