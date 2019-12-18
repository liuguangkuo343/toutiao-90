<template>
  <div class="login">
    <!-- 放置卡片 -->
    <el-card class="login-car">
      <!-- 放置logo图标 -->
      <img src="../../assets/img/logo_title.png" alt />
      <!-- 放置from表单 -->
      <el-form>
          <!-- 放置手机号 -->
        <el-form-item>
          <el-input placeholder="请输入手机号"></el-input>
        </el-form-item>
        <!-- 放置验证码 -->
        <el-form-item>
          <el-input style="width:63%" placeholder="请输入验证码" ></el-input>
          <el-button plain  style="float:right">发送验证码</el-button>
        </el-form-item>
        <!-- 放置check -->
        <el-form-item>
              <el-checkbox v-model="checked">我已阅读同意用户协议和条款</el-checkbox>
        </el-form-item>
        <!-- 放置登录按钮 -->
        <el-form-item>
          <el-button type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {}
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
