<template>
  <el-tabs v-model="activeName">
      <el-tab-pane label="素材库" name="meterial">
       <!-- 外层容器 -->
       <div class="select-image-list">
           <!-- 循环生成多个el-card -->
           <el-card style="margin-right:20px" v-for="itme in list" :key="itme.id" class="img-card">
                <img @click="clickImg(itme.url)" :src="itme.url" alt="">
           </el-card>
       </div>
       <!-- 放置一个分页组件 -->
       <el-row type="flex" justify="center">
           <!-- 绑定默认显示数据 -->
           <el-pagination background layou="prev,pager,next"
           :total="page.total"
            :current-page="page.currentPage"
            :page-size="page.pageSize"
            @current-change="changePage"
           > </el-pagination>
       </el-row>
      </el-tab-pane>
      <el-tab-pane label="上传图片" name="upload">上传图片</el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'meterial', // 选中默认组件
      list: [], // 接受素材管理的数据
      page: {
        currentPage: 1, // 默认请求页码
        pageSize: 8, // 默认选择几个图片
        total: 0 // 总页码
      }
    }
  },
  methods: {
    // 点击图片时候触发
    clickImg (url) {
      // 点击图片是 要把图片传给显示的封面
      this.$emit('selectOneImg', url) // 自定义事件名 这里可以不用小写
    },
    // 改编页码事件
    changePage (newPage) {
      this.page.currentPage = newPage
      this.getAllimg()
    },
    // 获取全部素材
    getAllimg () {
      this.$axios({
        url: '/user/images',
        params: { collect: false, page: this.page.currentPage, per_page: this.page.pageSize }
      }).then(result => {
        this.list = result.data.results
        this.page.total = result.data.total_count // 获取总数
      })
    }
  },
  created () {
    this.getAllimg()
  }
}
</script>

<style lang="less" scoped>
    .select-image-list{
        margin-left: 42px;

        display: flex;
        flex-wrap: wrap;
        .img-card{
            // margin-right: 20px;
            width: 180px;
            height: 200px;
            margin:30px 0;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
