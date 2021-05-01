<template>
  <div :id="chartsid" style="width:100%;height: 400px"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  props: {
    chartsid: {
      type: String,
      default: ''
    },
    option: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      chartLineGraph: null
    }
  },
  watch: {
    option: {
      handler (val, old) {
        this.drawLineGraph(this.chartsid, val)
      },
      deep: true
    }
  },
  methods: {
    drawLineGraph (id, data) {
      const myChart = document.getElementById(id)
      this.chartLineGraph = echarts.init(myChart)
      this.chartLineGraph.setOption(data)
    }
  }
}
</script>

<style>

</style>
