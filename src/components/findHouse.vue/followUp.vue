<template>
    <div class="from" >
            <el-table
                :data="tableData4" border stripe fit
                style="width: 100%"
                max-height="500">
                <el-table-column
                fixed
                prop="number"
                label="工单编号"
                width="150">
                </el-table-column>
                <el-table-column
                prop="classify"
                label="list"
                width="150">
                </el-table-column>
                <el-table-column
                prop="status"
                label="状态"
                width="150">
                </el-table-column>
                <el-table-column
                prop="from"
                label="来源"
                width="150">
                </el-table-column>
                <el-table-column
                prop="feedback"
                label="反馈方"
                width="150">
                </el-table-column>
                <el-table-column
                prop="customerName"
                label="客户姓名"
                width="150">
                </el-table-column>
                <el-table-column
                prop="tel"
                label="来电号码"
                width="150">
                </el-table-column>
                <el-table-column
                prop="leaseID"
                label="租约ID"
                width="150">
                </el-table-column>
                <el-table-column
                prop="creatTime"
                label="创建时间"
                width="180">
                </el-table-column>
                <el-table-column
                prop="updateTime"
                label="跟新时间"
                width="180">
                </el-table-column>
                <el-table-column
                fixed="right"
                label="操作"
                width="200">
                <template slot-scope="scope">
                    <el-button
                    type="text"
                    size="small">
                    详情
                    </el-button>
                    <el-button
                    type="text"
                    size="small">
                    申请关闭
                    </el-button>
                    <el-button
                    type="text"
                    size="small">
                    更改状态
                    </el-button>
                </template>
                </el-table-column>
            </el-table>
        </div>
</template>

<script>
export default {
    data () {
        return {
            tableData4: [{//表格数据
            number: '2016-05-03',
            classify: '王小虎',
            status:'待跟进',
            from:'电话',
            feedback:'租客',
            customerName:'罗格格',
            tel:'11111111111',
            leaseID:'11111111',
            creatTime:'2018-10-28 20:05:00',
            updateTime:'2018-10-28 20:05:00',
            }, {
            number: '2016-05-03',
            classify: '王小虎',
            status:'待跟进',
            from:'电话',
            feedback:'租客',
            customerName:'罗格格',
            tel:'11111111111',
            leaseID:'11111111',
            creatTime:'2018-10-28 20:05:00',
            updateTime:'2018-10-28 20:05:00',
            }, {
            number: '2016-05-03',
            classify: '王小虎',
            status:'待跟进',
            from:'电话',
            feedback:'租客',
            customerName:'罗格格',
            tel:'11111111111',
            leaseID:'11111111',
            creatTime:'2018-10-28 20:05:00',
            updateTime:'2018-10-28 20:05:00',
            }, {
            number: '2016-05-03',
            classify: '王小虎',
            status:'待跟进',
            from:'电话',
            feedback:'租客',
            customerName:'罗格格',
            tel:'11111111111',
            leaseID:'11111111',
            creatTime:'2018-10-28 20:05:00',
            updateTime:'2018-10-28 20:05:00',
            }, {
            number: '2016-05-03',
            classify: '王小虎',
            status:'待跟进',
            from:'电话',
            feedback:'租客',
            customerName:'罗格格',
            tel:'11111111111',
            leaseID:'11111111',
            creatTime:'2018-10-28 20:05:00',
            updateTime:'2018-10-28 20:05:00',
            }, {
            number: '2016-05-03',
            classify: '王小虎',
            status:'待跟进',
            from:'电话',
            feedback:'租客',
            customerName:'罗格格',
            tel:'11111111111',
            leaseID:'11111111',
            creatTime:'2018-10-28 20:05:00',
            updateTime:'2018-10-28 20:05:00',
            }, {
            number: '2016-05-03',
            classify: '王小虎',
            status:'待跟进',
            from:'电话',
            feedback:'租客',
            customerName:'罗格格',
            tel:'11111111111',
            leaseID:'11111111',
            creatTime:'2018-10-28 20:05:00',
            updateTime:'2018-10-28 20:05:00',
            }]
        }
    },
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
}
</script>

<style>

</style>
