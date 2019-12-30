<template>
<el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in list" :key="item">
      <img :src="item" alt="">
    </el-carousel-item>
  </el-carousel>

</template>

<script>
export default {
  data () {
    return {
      list: [
        'http://h.hiphotos.baidu.com/image/pic/item/b3b7d0a20cf431ad7427dfad4136acaf2fdd98a9.jpg',
        'http://b.hiphotos.baidu.com/image/h%3D300/sign=05b297ad39fa828bce239be3cd1e41cd/0eb30f2442a7d9337119f7dba74bd11372f001e0.jpg',
        'http://a.hiphotos.baidu.com/image/h%3D300/sign=b38f3fc35b0fd9f9bf175369152cd42b/9a504fc2d5628535bdaac29e9aef76c6a6ef63c2.jpg'

      ]
    }
  }
}
</script>

<style lang="less" scpoed>
.el-carousel{
  width: 1200px;
  height:800px;
  padding-left: 300px;
}
 .el-carousel__item  {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
     width: 1000px;
  height: 600px;
  // margin-left: 300px;
    img{
      width: 100%;
      height: 100%;
    }
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
