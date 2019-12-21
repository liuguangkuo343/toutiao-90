<template>

        <el-carousel :interval="4000" type="card" height="350px" arrow="always">
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
        'http://img0.imgtn.bdimg.com/it/u=2500553836,122069546&fm=26&gp=0.jpg',
        'http://img3.imgtn.bdimg.com/it/u=225181238,2514449497&fm=26&gp=0.jpg',
        'http://img0.imgtn.bdimg.com/it/u=319448621,3948969271&fm=26&gp=0.jpg'
      ]
    }
  }
}
</script>

<style>

</style>
