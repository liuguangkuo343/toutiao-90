<template>
  <el-card class="articles">
      <bread-crumb slot="header">
        <template slot="title">文章列表</template>
      </bread-crumb>
      <!-- 表单容器 -->
      <el-form style="padding-left:50px">
          <el-form-item label="文章状态:">
              <!-- 放置单选组 -->
              <el-radio-group v-model="searchForm.status">
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
              <el-date-picker type="daterange" v-model="searchForm.dateRange">

              </el-date-picker>
          </el-form-item>
      </el-form>

      <!-- 内容区域 -->
      <el-row class="total">
        <span>共找到6000符合条件的内容</span>
      </el-row>
      <div class="articles-item" v-for="item in 100" :key="item">
        <!-- 左侧 -->
        <div class="left">
          <img src="../../assets/img/touxiang.jpg" alt="">
          <div class="info">
            <span>啊哈哈哈哈哈</span>
            <el-tag style="text-align:center;witch:60px">标签一</el-tag>
            <span style="color:#999;font-size:12px">2019</span>
          </div>
        </div>
        <!-- 右侧 -->
        <div class="right">
          <span><i class="el-icon-edit">修改</i></span>
          <span><i class="el-icon-delete">删除</i></span>
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
      channels: [] // 接受频道数据
    }
  },
  methods: {
    // 获取所有的频道
    getChannels () {
      this.$axios({
        url: '/channels'
      }).then(result => {
        this.channels = result.data.channels
      })
    }
  },
  created () {
    this.getChannels() // 获取文章数据
  }
}

</script>

<style lang="less" scoped>
        .articles{
          .total{
            height: 60px;
            border-bottom: 1px dashed #ccc
          }
          .articles-item{
            display: flex; //左右布局
            justify-content:space-between;  //两头对齐
            padding: 20px 0px;
            border-bottom: 1px solid #f2f3f5;
            .left{
              display: flex;
              .info{
                height: 100px;
                justify-content:space-around;
                margin-left: 10px;
                display: flex;
                flex-direction: column
              }
              img{
                width: 180px;
                height: 100px;
                border-radius: 5px
              }
            }
            .right{
              span{
                font-size: 14px;
              margin-right: 8px
              }
              ;
            }
          }
        }
</style>
