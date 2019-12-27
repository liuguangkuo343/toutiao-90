<template>
  <el-card v-loading="loading">
      <bread-crumb slot="header">
        <template slot="title">发布文章</template>
      </bread-crumb>
      <!-- 容器 -->
      <el-form ref="publishForm" :model="formData" :rules="publishRules" style="margin:50px" label-width="100px">
        <el-form-item prop="title" label="标题">
          <el-input v-model="formData.title" style="witch:60%"></el-input>
        </el-form-item>
        <el-form-item prop="content" label="内容">
            <quill-editor v-model="formData.content" style="height:250px; margin-bottom:40px" margin-bottom:40px ></quill-editor>
        </el-form-item>
        <el-form-item  prop="cover" label="封面">
          <el-radio-group @change="changeType" v-model="formData.cover.type">
            <el-radio :label="1">单图</el-radio>
            <el-radio :label="3">三图</el-radio>
            <el-radio :label="0">无图</el-radio>
            <el-radio :label="-1">自动</el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- 封面组件 -->
        <cover-image :list="formData.cover.images"></cover-image>
        <el-form-item  prop="channel_id" label="频道">
          <el-select v-model="formData.channel_id">
            <el-option v-for="item in channels" :key="item.id" :value="item.id" :label="item.name">

            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button @click="publishArticle(false)" type="">发布</el-button>
          <el-button @click="publishArticle(true)" type="">存入草稿</el-button>
        </el-form-item>
      </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      channels: [], // 接受所有频道数据
      formData: {
        title: '', // 文章标题
        content: '', // 文章内容
        cover: {
          type: 0, // -1 自动 0 无图  1-1张 3-3张
          images: [] // 放置封面地址的数组
        },
        channel_id: null // 频道id
      },
      publishRules: {
        // 校验规则  title content channel_id  必填项
        title: [
          { required: true, message: '文章标题不能为空' },
          { min: 5, max: 30, message: '请输入5-3个字之间的标题' }
        ],
        content: [
          { required: true, message: '文章内容不能为空' }
        ],
        channel_id: [
          { required: true, message: '文章频道不能为空' }
        ]
      }
    }
  },
  watch: {
    $route: function (to, from) {
      if (to.params.articleId) {
        // 如果有id是修改 如果没有是发布
      } else {
        // 发布
        this.formData = {
          title: '', // 文章标题
          content: '', // 文章内容
          cover: {
            type: 0, // -1 自动 0 无图  1-1张 3-3张
            images: [] // 放置封面地址的数组
          },
          channel_id: null // 频道id
        }
      }
    }
    // 监听封面类型的改变
    //   'formData.cover.type': function () {
    //     // 根据images的长度 来渲染下面图片
    //     if (this.formData.cover.type === 0 || this.formData.cover.type === -1) {
    //       this.formData.cover.images = [] // 无图或者自动
    //     } else if (this.formData.cover.type === 1) {
    //       this.formData.cover.images = [''] // 一张图
    //     } else if (this.formData.cover.type === 3) {
    //       this.formData.cover.images = ['', '', ''] // 三张图
    //     }
    //   }
  },
  methods: {
    changeType () {
      // 根据images的长度 来渲染下面图片
      if (this.formData.cover.type === 0 || this.formData.cover.type === -1) {
        this.formData.cover.images = [] // 无图或者自动
      } else if (this.formData.cover.type === 1) {
        this.formData.cover.images = [''] // 一张图
      } else if (this.formData.cover.type === 3) {
        this.formData.cover.images = ['', '', ''] // 三张图
      }
    },

    // 获取所有频道
    getChannels () {
      this.$axios({
        url: '/channels'
      }).then(result => {
        this.channels = result.data.channels
      })
    },
    publishArticle (draft) {
      this.$refs.publishForm.validate(isOK => {
        if (isOK) {
          // 判断是修改还是发布文章
          let { articleId } = this.$route.params // 获取动态路由参数
          this.$axios({
            url: articleId ? `/articles/${articleId}` : '/articles',
            method: articleId ? 'put' : 'post',
            params: { draft }, // 查询参数
            data: this.formData // 请求体参数
          }).then(result => {
            this.$message({
              type: 'success',
              message: '保存成功'
            })
            // 跳转到文章列表页
            this.$router.push('/home/articles')
          })
          // if (articleId) {
          //   // 修改文章接口
          //   this.$axios({
          //     url: `/articles/${articleId}`,
          //     params: { draft }, // 查询参数
          //     data: this.formData // 请求体参数
          //   }).then(result => {
          //     this.$message({
          //       type: 'success',
          //       message: '保存成功'
          //     })
          //     // 跳转到文章列表页
          //     this.$router.push('/home/articles')
          //   })
          // } else {
          //   // 调用发布接口
          //   this.$axios({
          //     url: '/articles',
          //     method: 'post',
          //     params: { draft }, // 查询参数
          //     data: this.formData // 请求体参数
          //   }).then(() => {
          //     this.$message({
          //       type: 'success',
          //       message: '保存成功'
          //     })
          //     // 跳转到文章列表页
          //     this.$router.push('/home/articles')
          //   })
          // }
        }
      })
    },
    // 通过id查询文章数据
    getArticleById (articleId) {
      this.loading = true
      this.$axios({
        url: `/articles/${articleId}`
      }).then(result => {
        this.loading = false
        this.formData = result.data // 数据复制给forData
      })
    }
  },

  created () {
    this.getChannels()
    let { articleId } = this.$route.params
    articleId && this.getArticleById(articleId) // 如果id存在查询文章的数据
  }
}
</script>

<style>

</style>
