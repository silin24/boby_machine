<template>
  <div>
     <div id="myChart"></div>
  </div>
</template>

<script>
  export default {
    props:{
      option:{
        type:Object,
        require:true
      }
    },
  data () {
    return {
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption(this.option);
    }
  }
}
</script>

<style scoped lang="scss">
#myChart {
  height: 102px;
  width: 311px;
}
</style>