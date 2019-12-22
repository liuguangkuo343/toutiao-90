<template>
  <!-- 卡片组件 评论管理-->
  <el-card>
      <bread-crumb slot="header">
            <!-- 插槽内容 -->
      <template slot="title">
          评论管理
      </template>
      </bread-crumb>
    <!-- tl-table 表格 lable表头 width宽度 prop字段名 el-table不显示布尔值-->
    <el-table :data="list">
        <el-table-column prop="title" width="650px" label="标题"></el-table-column>
        <el-table-column :formatter="formatterBolen" prop="status" label="评论状态"></el-table-column>
        <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
        <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
        <el-table-column  label="操作">
            <!-- 作用域插槽 -->
            <template slot-scope = 'obj'>
                <el-button size="small" type="text">修改</el-button>
            <!-- 根据状态进行判断关闭还是打开 -->
            <el-button size="small" type="text">{{obj.row.status ? '关闭':'打开'}}评论</el-button>

            </template>

        </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: [

      ] // 接受返回结果
    }
  },
  methods: {
    getComment () {
      this.$axios({
        url: '/articles',
        params: { response_type: 'comment' }
      }).then(result => {
        this.list = result.data.results
      })
    },
    // 定义格式化函数
    // row =当前数据 column=当前列信息 cellValue=当前单元格的值 index=索引
    formatterBolen (row, column, cellValue, index) {
      return cellValue ? '正常' : '关闭'
    }
  },
  created () {
    //   渲染页面 获取数据
    this.getComment()
  }
}
</script>

<style>

</style>
