  <!-- <div>素材管理</div> -->
<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">素材管理</template>
    </bread-crumb>
    <!-- 标签页 label:标题 name="all"-->
    <el-tabs v-model="activeName" @tab-click="changeTab">
      <el-tab-pane label="全部图片" name="all">
        <!-- 生成页面结构 -->
        <div class="img-list">
          <!-- v-for对数据进行遍历 -->
          <el-card class="card-img" v-for="item in list" :key="item.id">
            <img :src="item.url" alt />
            <el-row class="tubiao" type="flex" align="middle" justify="space-around">
                <!-- //根据当前状态来决定 是否给文字调价颜色  区分状态-->
              <i @click="addordel(item)" :style="{color: item.is_collected ? 'pink':'#000'}" class="el-icon-star-on"></i>
              <i @click="delimg(item.id)"  class="el-icon-delete-solid"></i>
            </el-row>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="收藏图片" name="collect">
        <!-- 生成页面结构 -->
        <div class="img-list">
          <!-- v-for对数据进行遍历 -->
          <el-card class="card-img" v-for="item in list" :key="item.id">
            <img :src="item.url" alt />
          </el-card>
        </div>
      </el-tab-pane>
    </el-tabs>
    <!-- 放入公共分页组件 -->
    <el-row type="flex" justify="center">
      <el-pagination
        :currentPage="page.currentPage"
        :pagesize="page.pagesize"
        :total="page.total"
        backgroundlayout="prev,pager,next"
        @current-change="changepage"
      ></el-pagination>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all', // 当前选中谁
      list: [], // 接受全部数据
      page: {
        currentPage: 1,
        pagesize: 10,
        total: 0
      }
      //   console.log();

    }
  },
  methods: {
    // 删除图片
    delimg (id) {
      this.$confirm('您确定要删除图片吗').then(() => {
        this.$axios({
          method: 'delete',
          url: `/user/images/${id}`
        }).then(() => {
          this.getMaterial()
        })
      })
    },
    // 取消或者收藏
    addordel (item) {
      this.$axios({
        method: 'put',
        url: `/user/images/${item.id}`,
        data: {
          collect: !item.is_collected // 取反 收藏就要取消
        }
      }).then(result => {
        this.getMaterial()
      })
    },
    //   改编页码方法
    changepage (newPage) {
      this.page.currentPage = newPage // 新页码拉取
      this.getMaterial()
    },
    //   切换页签
    changeTab () {
      this.page.currentPage = 1 // 重新回到第一页
      this.getMaterial() // 切换全部和收藏 利用collect: this.activeName === 'collect'
    },

    // 获取素材的方法
    getMaterial () {
      this.$axios({
        url: '/user/images',
        params: {
          page: this.page.currentPage,
          per_page: this.page.pagesize,

          collect: this.activeName === 'collect' // 传false是获取所有的数据 传true是获取收藏数据
        }
      }).then(result => {
        this.list = result.data.results // 获取图片数据 有可能是 全部 也由可能是收藏
        this.page.total = result.data.total_count // 总条数
      })
    }
  },
  created () {
    this.getMaterial()
  }
}
</script>

<style lang="less" scoped>
.img-list {
  display: flex;
  // flex: wrap;
  flex-wrap: wrap;
  .card-img {
    width: 200px;
    height: 250px;
    margin: 20px 50px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .tubiao {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      font-size: 20px;
      height: 30px;
      // line-height: 36px;
      background-color: cadetblue;
    }
    i{
    cursor: pointer
    }
  }
}
</style>
