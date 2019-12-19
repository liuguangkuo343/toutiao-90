<template>
  <!-- 整体的容器 -->
  <el-container>
    <!-- 左右布局 -->
    <el-aside style="height:100vh;background-color: #323745; width:230px">
        <leftaside></leftaside>
    </el-aside>
    <!-- 上下布局 -->
    <el-container>
      <el-header>头部容器</el-header>
    <el-main>主要内容</el-main>
    </el-container>

  </el-container>
</template>
<script>
import leftaside from '../../components/home/leftaside'
export default {
  components: {
    'leftaside': leftaside
  }
}
</script>

<style>
</style>
