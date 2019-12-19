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
                <img src="../../assets/img/touxiang.jpg" alt="">
                <!-- 下拉菜单 -->
                <el-dropdown>
                    <!-- 匿名插槽 -->
                    <span>North</span>
                    <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item>GIT地址</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .headerhome{
        height: 60px;
        line-height: 60px;
        .left{
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
