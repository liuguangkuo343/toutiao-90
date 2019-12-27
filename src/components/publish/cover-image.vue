<template>
  <div class="cover-image">
    <div @click="openDialog(index)" class="cover-image-item" v-for="(item,index) in list" :key="index">
      <img :src="item ? item : defaultImg" alt />
    </div>
    <!-- 放置一个对话框 弹层 -->
    <el-dialog @close="closeDialog" :visible="dialogVisible" title="选择封面图片">
      <!-- 放置素材库组件 -->
      <!-- 监听谁在谁的标签上写监听 -->
      <select-images @selectOneImg="receiveImg"></select-images>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ['list'],
  data () {
    return {
      defaultImg: require('../../assets/img/pic_bg.png'),
      dialogVisible: false, // 用来控制弹层的开关
      selectIndex: -1 // 用来存储点击的那个图片的下标
    }
  },
  methods: {
    // 接受方法
    receiveImg (url) {
      // props 只能读取 不能修改
      this.$emit('selectTwoImg', url, this.selectIndex) // 再次传递
      this.closeDialog() // 关闭弹层
    },
    // 关闭打开弹层
    openDialog (index) {
      this.dialogVisible = true// 打开弹层
      this.selectIndex = index
    },
    closeDialog () {
      this.dialogVisible = false // 关闭弹层
    }
  }
}
</script>

<style lang="less" scoped>
.cover-image {
  margin-left: 100px;
  margin: 20px 100px;
  display: flex;
  .cover-image-item {
    border: 1px solid #ccc;
    width: 250px;
    height: 250px;
    padding: 20px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
