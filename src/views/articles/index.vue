<template>
  <el-card>
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

<style>

</style>
