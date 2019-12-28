<template>
  <el-card>
      <bread-crumb slot="header">
        <template slot="title">
            账户信息
        </template>
      </bread-crumb>
      <!-- 表单容器 -->
      <el-form style="margin-left:100px" label-width="100px">
                <el-form-item label="用户名:">
                    <el-input style="width:35%" v-model="formData.name"></el-input>
                    </el-form-item>
                <el-form-item label="简介:" >
                    <el-input style="width:35%" v-model="formData.intro"></el-input>
                    </el-form-item>
                <el-form-item label="邮箱:" >
                    <el-input style="width:35%" v-model="formData.photo"></el-input>
                    </el-form-item>
                <el-form-item label="手机号:" >
                    <el-input disabled style="width:35%" v-model="formData.email"></el-input>
                    </el-form-item>
                <el-form-item >
                    <el-button type="primary"> 保存信息</el-button>
                </el-form-item>
            </el-form>
            <!-- 上传组件 -->
            <el-upload action="" :show-file-list="false" class="header-upload">
                <img :src="formData.photo ? formData.photo : defaultImg" alt="">
            </el-upload>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        name: '', // 用户名
        intro: '', // 简介
        photo: '', // 头像
        email: '', // 邮箱
        mobile: ''// 手机
      },
      defaultImg: require('../../assets/img/toutiao.png')
    }
  },
  methods: {
    getUserInfo () {
      this.$axios({
        url: 'user/profile'
      }).then(result => {
        this.formData = result.data
      })
    }
  },
  created () {
    this.getUserInfo()
  }

}
</script>

<style lang="less" scoped>
    .header-upload{
       position: absolute;
       right: 300px;
       top: 200px;
       img{
              width: 200px;
        height: 200px;
            border-radius: 50%
       }
    }
</style>
