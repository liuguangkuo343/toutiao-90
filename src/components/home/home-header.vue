<template>
    <el-row class="headerhome" type="flex" align="middle">
        <!-- 左边 -->
        <el-col :span="12" class="left">
            <i class="el-icon-s-promotion"></i>
            <span>江苏传智播客教育科技股份有限公司</span>
        </el-col>
        <!-- 右边 -->
        <el-col :span="12" class="right">
            <el-row type="flex" justify="end">
                <img :src="userInfo.photo ? userInfo.photo : defultImg" alt="">
                <!-- 下拉菜单 -->
                <el-dropdown @command ="clickcommand">
                    <!-- 匿名插槽 -->
                    <span>{{userInfo.name}}</span>
                    <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="info">账户信息</el-dropdown-item>
                    <el-dropdown-item command="url">GIT地址</el-dropdown-item>
                    <el-dropdown-item command="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
import eventBus from '../../utils/eventBus'
export default {
  data () {
    return {
      userInfo: {}, // 用户对象接受数据
      // 没图片时替代用户图片 默认图片  转换成变量 去做三元表达式判断
      defultImg: require('../../assets/img/touxiang.jpg')
    }
  },
  // 钩子函数
  created () {
    this.$axios({
      url: '/user/profile'
    }).then(result => {
      this.userInfo = result.data
    })

    // 同步更新  开启监听
    eventBus.$on('updateUserinFo', () => {
      // 认为别人更新了 自己也应该更新
      // let token = localStorage.getItem('user-token') // 获取用户令牌
      this.$axios({
        url: '/user/profile'
      }).then(result => {
        this.userInfo = result.data
        console.log(this.userInfo)
      })
    })
  },
  methods: {
    // getUserInfo () {

    // },
    //   定义点击事件
    clickcommand (command) {
      if (command === 'info') {
        this.$router.push('/home/account') // 去到账户信息
      } else if (command === 'url') {
        window.location.href = ('https://github.com/liuguangkuo343/toutiao-90/commits/master')
      } else {
        //   退出当前主页 返回登录页面
        window.localStorage.removeItem('user-token') // 删除用户令牌
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="less" scoped>
    .headerhome{
        height: 60px;
        line-height: 60px;
        .left{
          // height: 200px;
            font-size: 20px;
            span{
                color: #2c3e50;
                font-size: 16px;
                margin-left: 5px;
            }
        }
        .right{
            img{
                height: 50px;
                border-radius: 50%;
                margin-right: 15px;
                margin-top: 3px;
            }
        }
    }
</style>
