<template>
  <div class="login">
    <!-- 放置卡片 -->
    <el-card class="login-car">
      <!-- 放置logo图标 -->
      <img src="../../assets/img/logo_title.png" alt />
      <!-- 放置from表单 -->
      <el-form ref="myForm" :model="loginForm" :rules="loginRules">
          <!-- 放置手机号 -->
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号" ></el-input>
        </el-form-item>
        <!-- 放置验证码 -->
        <el-form-item prop="code">
          <el-input style="width:63%" placeholder="请输入验证码" v-model="loginForm.code" ></el-input>
          <el-button plain  style="float:right" >发送验证码</el-button>
        </el-form-item>
        <!-- 放置check -->
        <el-form-item prop="check">
              <el-checkbox v-model="loginForm.check">我已阅读同意用户协议和条款</el-checkbox>
        </el-form-item>
        <!-- 放置登录按钮 -->
        <el-form-item>
          <el-button @click="submitLogin" type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        check: false // 勾选项
      },
      loginRules: {
        //   验证规则
        // 手机号验证
        mobile: [
          { required: true, message: '请输入手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '手机号格式不正确' },
          {}
        ],
        // 验证码验证规则
        code: [
          { required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: '验证码格式不正确' }
        ],
        // 自定义验证函数 验证check
        check: [{
          validator: function (rule, value, callback) {
            if (value) {
              callback() // 当前规则效验成功
            } else {
              callback(new Error('请您阅读完信息进行勾选')) // 效验失败
            }
          }
        }]
      }
    }
  },
  methods: {
    submitLogin () {
      // 校验整个表单的规则
      this.$refs.myForm.validate((isOK) => {
        if (isOK) {
          this.$axios({
            url: '/authorizations', // 请求地址,
            method: 'post', // 请求类型
            data: this.loginForm // body参数
          }).then(result => {
            // 只接受正确结果
            window.localStorage.setItem('user-token', result.data.data.token)
            this.$router.push('/home')
            // console.log(result.data.data.token)
          }).catch(() => {
            // 错误结果
            this.$message({
              type: 'warning',
              message: '您的手机号或者验证码不正确'
            })
          })
          // alert('登陆成功')
        }
      })
    }
  }
}

</script>

<style lang="less" scoped>
.login {
  background-image: url(../../assets/img/back.jpg);
  height: 100vh;
  background-size: cover;
  display: flex;
  position: relative;
  justify-content: center;
  //   align-items:center;
  .login-car {
    position: absolute;
    top: 38%;
    left: 33%;
    width: 440px;
    height: 330px;
    img {
      margin-left: 80px;
      text-align: center;
      height: 48px;
      margin-bottom: 20px;
    }
  }
}
</style>
