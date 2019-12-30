<template>
  <!-- 整体的容器 -->
  <el-container class="header">
    <!-- 左右布局 -->
    <el-aside style="background-color: #323745; width:230px;">
        <leftaside></leftaside>
    </el-aside>
    <!-- 上下布局 -->
    <el-container>
      <el-header  style="background-color:#ccc">
      <home-header>  </home-header>
      </el-header>
    <el-main style="background-color:#fff">
      <!-- 二级路由容器 -->
      <router-view></router-view>
    </el-main>
    </el-container>

  </el-container>
</template>
<script>
// import leftaside from '../../components/home/leftaside'
// import homeheader from '../../components/home/home-header'
export default {
  // components: {
  //   'leftaside': leftaside,
  // 'homeheader': homeheader
  // }
}
</script>

<style lang="less">

</style>
