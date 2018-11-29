<template>
  <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
    <!-- 全部通话 -->
    <el-tab-pane label="全部记录" name="first">
      <el-table :data="all" style="width: 100%">
        <el-table-column prop="date" label="时间" width="150"></el-table-column>
        <el-table-column prop="name" label="内容" width="250"></el-table-column>
        <el-table-column prop="movement" label="动作" width="180"></el-table-column>
        <el-table-column prop="address" label="处理人"></el-table-column>
      </el-table>
    </el-tab-pane>
    <!-- 描述记录 -->
    <el-tab-pane label="描述记录" name="second">
      <el-table :data="describe" style="width: 100%">
        <el-table-column prop="date" label="时间" width="150"></el-table-column>
        <el-table-column prop="name" label="内容" width="250" v-model="describeContent"></el-table-column>
        <el-table-column prop="movement" label="动作" width="180"></el-table-column>
        <el-table-column prop="address" label="处理人"></el-table-column>
      </el-table>
    </el-tab-pane>
    <!-- 短信记录 -->
    <el-tab-pane label="短信记录" name="third">
      <el-table :data="note" style="width: 100%">
        <el-table-column prop="date" label="时间" width="150" v-model="noteContent"></el-table-column>
        <el-table-column prop="name" label="内容" width="250"></el-table-column>
        <el-table-column prop="movement" label="动作" width="180"></el-table-column>
        <el-table-column prop="address" label="处理人"></el-table-column>
      </el-table>
    </el-tab-pane>
    <!-- 通话记录 -->
    <el-tab-pane label="通话记录" name="fourth">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="时间" width="180"></el-table-column>
        <el-table-column prop="name" label="内容" width="180"></el-table-column>
        <el-table-column prop="movement" label="动作" width="180"></el-table-column>
        <el-table-column prop="address" label="处理人"></el-table-column>
      </el-table>
    </el-tab-pane>
    <div></div>
  </el-tabs>
</template>
<script>
export default {
  data() {
    return {
      // tab表格
      activeName2: "first",
      // 全部记录
      all: [
        {
          date: this.noteContent,
          name: "你是我的眼带我领略四季的变化",
          movement: "租客打给客服",
          address: "ni  "
        },
        {
          date: this.value,
          name: "王小虎",
          movement: "推送短信",
          address: "ni  "
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          movement: "推送短信",
          address: "ni  "
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          movement: "推送短信",
          address: "ni  "
        }
      ],
      // 通话记录
      tableData: [
        {
          date: "2016-05-02",
          name: "你是我的眼带我领略四季的变化 ，",
          movement: "租客打给客服",
          address: "ni  "
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          movement: "推送短信",
          address: "ni  "
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          movement: "推送短信",
          address: "ni  "
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          movement: "推送短信",
          address: "ni  "
        }
      ],
      // 描述记录
      describe: [
        {
          date: "2016-05-02",
          name: "描述记录",
          movement: "编辑内容",
          address: "ni  "
        },
        {
          date: "2016-05-04",
          name: "描述记录",
          movement: "121",
          address: "ni  "
        },
        {
          date: "2016-05-01",
          name: "描述记录",
          movement: "推送短信",
          address: "ni  "
        },
        {
          date: "2016-05-03",
          name: "描述记录",
          movement: "推送短信",
          address: "ni  "
        }
      ],
      describeContent: "1212",
      // 短信记录
      note: [
        {
          date: "2016-05-02",
          name:
            "你是我的眼带我领略四季的变化 ，你是我的眼眼带我穿越人际的人潮，我",
          movement: "推送短信",
          address: "ni  "
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          movement: "121",
          address: "ni  "
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          movement: "推送短信",
          address: "ni  "
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          movement: "推送短信",
          address: "ni  "
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="less" scoped>
.el-tabs {
  background-color: red;
}
#app {
  background-color: red;
}
// @import '../css/AllRecord.less';
</style>
