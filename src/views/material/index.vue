  <!-- <div>素材管理</div> -->
<template>
  <el-card>
      <bread-crumb slot="header">
      <template slot="title">
          素材管理
      </template>
      </bread-crumb>
      <!-- 标签页 label:标题 name="all"-->
      <el-tabs v-model="activeName" @tab-click="changeTab">
          <el-tab-pane label="全部图片" name="all">
              <!-- 生成页面结构 -->
              <div class="img-list">
                  <!-- v-for对数据进行遍历 -->
                    <el-card class="card-img" v-for="item in list" :key="item.id">
                        <img :src="item.url" alt="">
                        <el-row class="tubiao" type="flex" align="middle" justify="space-around">
                            <i class="el-icon-star-on"></i>
                            <i class="el-icon-delete-solid"></i>
                        </el-row>
                    </el-card>
              </div>
          </el-tab-pane>
          <el-tab-pane label="收藏图片" name="collect">
              <!-- 生成页面结构 -->
              <div class="img-list">
                  <!-- v-for对数据进行遍历 -->
                    <el-card class="card-img" v-for="item in list" :key="item.id">
                        <img :src="item.url" alt="">
                    </el-card>
              </div>
          </el-tab-pane>
      </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all', // 当前选中谁
      list: [] // 接受全部数据
    }
  },
  methods: {
    //   切换页签
    changeTab () {
      this.getMaterial() // 切换全部和收藏 利用collect: this.activeName === 'collect'
    },
    getMaterial () {
      this.$axios({
        url: '/user/images',
        params: {
          collect: this.activeName === 'collect' // 传false是获取所有的数据 传true是获取收藏数据
        }
      }).then(result => {
        this.list = result.data.results // 获取图片数据 有可能是 全部 也由可能是收藏
      })
    }
  },
  created () {
    this.getMaterial()
  }
}
</script>

<style lang="less" scoped>
    .img-list{
        display: flex;
        // flex: wrap;
        flex-wrap: wrap;
        .card-img{
        width: 200px;
        height: 250px;
        margin: 20px 50px;
        position: relative;
            img{
                width: 100%;
                height: 100%;
            }
            .tubiao{
                width: 100%;
                position: absolute;
                left: 0;
                bottom: 0;
                font-size: 20px;
                height:30px;
                // line-height: 36px;
                background-color:cadetblue
            }
        }

    }
</style>
