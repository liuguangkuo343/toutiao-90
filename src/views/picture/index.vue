<template>
  <el-card class="type">
      <bread-crumb slot="header">
        <template slot="title">图文数据</template>
      </bread-crumb>
      <div ref="myChart" class="echarts">
      </div>
      <div ref="myChartTwo" class="echarts1"></div>
  </el-card>
</template>

<script>
import echarts from 'echarts'
export default {
  mounted () {
    let myChart = echarts.init(this.$refs.myChart)
    let myChartTwo = echarts.init(this.$refs.myChartTwo)
    myChart.setOption({
      title: {
        text: '测试数据'
      },
      xAxis: {

        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
      }]
    })
    myChartTwo.setOption({
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1548, name: '搜索引擎' }
          ]
        }
      ]
    })
  }
}
</script>

<style>
    .echarts{
        width: 600px;
        height: 500px;
    }
    .type{
        position: relative;
    }
    .echarts1{
        width: 500px;
        height: 500px;
        position: absolute;
        left: 800px;
        bottom:200px
    }
</style>
