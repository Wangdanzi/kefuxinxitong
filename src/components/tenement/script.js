export default {
  data() {
    return {
      pickerOptions1: {
        shortcuts: [{
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
      // 返回短信推送流程
      checked: true,
      // 侧边栏表单
      sizeForm: {
        name: ''
      },
      // 点击跳出对话框
      dialogVisible: false
    }
  }
}
