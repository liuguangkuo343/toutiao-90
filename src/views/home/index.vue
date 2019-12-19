<template>
  <!-- 整体的容器 -->
  <el-container>
    <!-- 左右布局 -->
    <el-aside style="height:100vh;background-color: #323745; width:230px;">
        <leftaside></leftaside>
    </el-aside>
    <!-- 上下布局 -->
    <el-container>
      <el-header style="background-color:#66FFFF">
      <homeheader>  </homeheader>
      </el-header>
    <el-main style="background-color:#66CCFF">主要内容</el-main>
    </el-container>

  </el-container>
</template>
<script>
import leftaside from '../../components/home/leftaside'
import homeheader from '../../components/home/home-header'
export default {
  components: {
    'leftaside': leftaside,
    'homeheader': homeheader
  }
}
</script>

<style>
</style>
