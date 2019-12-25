<template>
  <el-card class="articles">
    <bread-crumb slot="header">
      <template slot="title">文章列表</template>
    </bread-crumb>
    <!-- 表单容器 -->
    <el-form style="padding-left:50px">
      <el-form-item label="文章状态:">
        <!-- 放置单选组 -->
        <el-radio-group v-model="searchForm.status" >
          <el-radio :label="5">全部</el-radio>
          <el-radio :label="0">草稿</el-radio>
          <el-radio :label="1">待审核</el-radio>
          <el-radio :label="2">审核通过</el-radio>
          <el-radio :label="3">审核失败</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="频道列表:">
        <el-select placeholder="请选择频道" v-model="searchForm.id">
          <!-- lable显示 value 存储 -->
          <el-option v-for="item in channels" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="时间选择:">
        <!-- 日期选择器 -->
        <el-date-picker  value-format="yyyy-mm-dd" type="daterange" v-model="searchForm.dateRange"></el-date-picker>
      </el-form-item>
    </el-form>

    <!-- 内容区域 -->
    <el-row class="total">
      <span>共找到6000符合条件的内容</span>
    </el-row>
    <div class="articles-item" v-for="item in list" :key="item.id.toString()">
      <!-- 左侧 -->
      <div class="left">
        <!-- 获取图片数据 -->
        <img :src="item.cover.images.length ? item.cover.images[0] : defaultImg" alt />
        <div class="info">
          <span>{{item.title}}}</span>
          <!-- 用v-bind绑定 进行判断状态 -->
          <el-tag
            :type="item.status |filterType"
            style="text-align:center;witch:40px;"
          >{{item.status | filterStatus}}</el-tag>
          <span style="color:#999;font-size:12px">{{item.pubdate}}}</span>
        </div>
      </div>
      <!-- 右侧 -->
      <div class="right">
        <span>
          <i class="el-icon-edit">修改</i>
        </span>
        <span>
          <i class="el-icon-delete">删除</i>
        </span>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      searchForm: {
        status: 5, // 默认选择全部
        channel_id: null, // 绑定显示
        dateRange: [] // 日期范围
      },
      channels: [], // 接受频道数据
      list: [],
      defaultImg: require('../../assets/img/touxiang.jpg')
    }
  },
  watch: {
    searchForm: {
      handler: function (params) {
        this.changeCondition() // 直接调
      },
      deep: true
    }
  },
  filters: {
    // 过滤器名称
    filterStatus (value) {
      // value第一个参数  当前状态进行判断
      switch (value) {
        case 0:
          return '草稿'
        case 1:
          return '待审核'
        case 2:
          return '已发表'
        case 3:
          return '审核失败'
        default:
          break
      }
    },
    filterType (value) {
      // value第一个参数  当前状态进行判断
      switch (value) {
        case 0:
          return 'warning'
        case 1:
          return 'info'
        case 2:
          return ''
        case 3:
          return 'danger'
        default:
          break
      }
    }
  },
  methods: {
    // 改变条件
    changeCondition () {
      // alert(this.searchForm.status)
      let params = {
        status: this.searchForm.status === 5 ? null : this.searchForm.status, // 因为5是前端定义的一个标识, 如果等于5 表示查全部, 全部应该什么都不传 直接传null
        channel_id: this.searchForm.channel_id,
        begin_pubdate: this.searchForm.dateRange.length ? this.searchForm.dateRange[0] : null, // 开始时间
        end_pubdate: this.searchForm.dateRange.length > 1 ? this.searchForm.dateRange[1] : null // 截止时间
      }
      this.getArticles(params)
      // alert('1')
    },
    // 获取所有的频道
    getChannels () {
      this.$axios({
        url: '/channels'
      }).then(result => {
        this.channels = result.data.channels
      })
    },
    // 获取文章列表数据
    getArticles (params) {
      this.$axios({
        url: '/articles',
        params
      }).then(result => {
        this.list = result.data.results
      })
    }
  },
  created () {
    this.getChannels() // 获取文章数据
    this.getArticles() // 获取文章列表数据
  }
}
</script>

<style lang="less" scoped>
.articles {
  .total {
    height: 60px;
    border-bottom: 1px dashed #ccc;
  }
  .articles-item {
    display: flex; //左右布局
    justify-content: space-between; //两头对齐
    padding: 20px 0px;
    border-bottom: 1px solid #f2f3f5;
    .left {
      display: flex;
      .info {
        height: 100px;
        justify-content: space-around;
        margin-left: 10px;
        display: flex;
        flex-direction: column;
      }
      img {
        width: 180px;
        height: 100px;
        border-radius: 5px;
      }
    }
    .right {
      span {
        font-size: 14px;
        margin-right: 8px;
      }
    }
  }
}
</style>
