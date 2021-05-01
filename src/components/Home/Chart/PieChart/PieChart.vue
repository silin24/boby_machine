<template>
  <div>
     <div id="myChart1"></div>
  </div>
</template>

<script>
  export default {
  data () {
    return {
      total:'设备数量'
    }
  },
  mounted(){
    this.drawpie();
  },
  methods: {
    drawpie(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart1'))
        // 绘制图表
        myChart.setOption({
          tooltip: {
              trigger: 'item'
          },
          // legend: {
          //     top: '5%',
          //     left: 'center'
          // },
          series: [
              {
                name: '访问来源',
                type: 'pie',
                radius: ['100%', '80%'],
                avoidLabelOverlap: false,
                label: {
                    // show: false,
                    position: 'center',
                    formatter: '{total|' + this.total +'}'+ '\n\r' + '{active|4台}',
                    rich: {
                        total:{
                            fontSize: 12,
                            fontFamily : "微软雅黑",
                            color:'#454c5c',
                        },
                        active: {
                            fontFamily : "微软雅黑",
                            fontSize: 18,
                            color:'#6c7a89',
                            lineHeight:40,
                        },
                    }
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '40',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: 1, name: '搜索引擎'},
                    {value: 1, name: '直接访问'},
                    {value: 1, name: '邮件营销'},
                    {value: 1, name: '联盟广告'},
                ]
              }
          ]
        });
    }
  }
}
</script>

<style scoped lang="scss">
#myChart1 {
  width: 103px;
  height: 103px;
  text-align: center;
}
</style>