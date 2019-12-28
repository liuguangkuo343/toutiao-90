<template>
  <el-card>
      <bread-crumb slot="header">
        <template slot="title">
            账户信息
        </template>
      </bread-crumb>
      <!-- 表单容器 -->
      <el-form ref="myform" :model="formData" :rules="rules" style="margin-left:100px" label-width="100px">
                <el-form-item prop="name" label="用户名:">
                    <el-input style="width:35%" v-model="formData.name"></el-input>
                    </el-form-item>
                <el-form-item prop="intro" label="简介:" >
                    <el-input style="width:35%" v-model="formData.intro"></el-input>
                    </el-form-item>
                <el-form-item  prop="email" label="邮箱:" >
                    <el-input style="width:35%" v-model="formData.email"></el-input>
                    </el-form-item>
                <el-form-item  prop="mobile" label="手机号:" >
                    <el-input disabled style="width:35%" v-model="formData.mobile"></el-input>
                    </el-form-item>
                <el-form-item >
                    <el-button type="primary" @click="saveUserInfo"> 保存信息</el-button>
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
      defaultImg: require('../../assets/img/toutiao.png'),
      rules: {
        // 用户名  邮箱 进行判断
        name: [{ required: true, message: '用户名不能为空' }, { min: 1, max: 7, message: '请输入1-7之间的用户名' }],
        email: [{ required: true, message: '邮箱不能为空' }, { pattern: /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/, message: '请输入正确的邮箱' }]
        // mobile: [{ required: true, message: '手机号不能为空' }]
      }
    }
  },
  methods: {
    getUserInfo () {
      this.$axios({
        url: '/user/profile'
      }).then(result => {
        this.formData = result.data
      })
    },
    // 保存用户信息
    saveUserInfo () {
      this.$refs.myform.validate().then(result => {
        this.$axios({
          url: '/user/profile',
          method: 'patch',
          data: this.formData
        }).then(result => {
          this.$message({
            type: 'success',
            message: '保存用户信息成功'
          })
        })
      })
    }
  },
  created () {
    this.getUserInfo()
    // this.saveUserInfo()
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
