<template>
  <!-- 卡片组件 评论管理-->
  <el-card v-loading = "loading">
    <bread-crumb slot="header">
      <!-- 插槽内容 -->
      <template slot="title">评论管理</template>
    </bread-crumb>
    <!-- tl-table 表格 lable表头 width宽度 prop字段名 el-table不显示布尔值-->
    <el-table :data="list">
      <el-table-column prop="title" width="650px" label="标题"></el-table-column>
      <el-table-column :formatter="formatterBolen" prop="comment_status" label="评论状态"></el-table-column>
      <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
      <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
      <el-table-column label="操作">
        <!-- 作用域插槽 -->
        <template slot-scope="obj">
          <el-button size="small" type="text">修改</el-button>
          <!-- 根据状态进行判断关闭还是打开 -->
          <el-button
            @click="openOrstate(obj.row)"
            size="small"
            type="text"
          >{{obj.row.comment_status ? '关闭':'打开'}}评论</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 total 总页 分页多少条page-size-->
    <el-row type="flex" align="middle" style="height:80px" justify="center">
         <el-pagination layout="prev, pager, next" :current-page="page.currentPage"
          :page-size="page.pagesize"
          @current-change="changepage"
          :total="page.total">
          </el-pagination>
    </el-row>

  </el-card>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      list: [], // 接受返回结果
      page: {
        // 创建对象 存放分页信息各种数据
        total: 0,
        pagesize: 10,
        currentPage: 1
      }
    }
  },
  methods: {
    // 页码改变事件
    changepage (newPage) {
      this.page.currentPage = newPage // 最新的页码
      this.getComment()
    },
    getComment () {
      this.loading = true
      this.$axios({
        url: '/articles',
        params: { response_type: 'comment', page: this.page.currentPage, per_page: this.page.pagesize }
      }).then(result => {
        this.list = result.data.results
        this.page.total = result.data.total_count // 总条数
        // setTimeout(() => { this.loading = false }, 2)
        this.loading = false
      })
    },
    // 定义格式化函数
    // row =当前数据 column=当前列信息 cellValue=当前单元格的值 index=索引
    formatterBolen (row, column, cellValue, index) {
      return cellValue ? '正常' : '关闭'
    },
    // 打开或者关闭评论
    openOrstate (row) {
      let mess = row.comment_status ? '关闭' : '打开' // 获取状态
      this.$confirm(`您是否确定${mess}评论吗`).then(() => {
        //   调用接口
        console.log(row.comment_status)
        this.$axios({
          url: '/comments/status',
          method: 'put',
          params: { article_id: row.id.toString() },
          data: { allow_comment: !row.comment_status }
        }).then(result => {
          this.getComment() // 重新拉取评论管理数据
        })
      })
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
