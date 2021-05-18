<template>
  <div class="promotion">
    <!-- <div class="promotionHeader">
      <span>推广数据</span>
      <div>
        <span>昨日</span>
        <span>近7日</span>
        <span>近30日</span>
      </div>
    </div> -->
    <CardHeader title="推广数据"/>
    <div class="promotionContent">
      <div>
        <span class="num">120</span>
        <span>次视频发布</span>
      </div>
      <div class="promotionChart">
        <BarChart :option='option'/>
      </div>
    </div>

  </div>
</template>

<script>
import BarChart from '../Chart/BarChart/BarChart'
import CardHeader from '../CardHeader/CardHeader'
  export default {
    components:{BarChart,CardHeader},
    data() {
      return {
        option:{
            // title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {},
            grid: {
            // left: '1%',
            right: '0',
            // bottom: '20%',
            containLabel: true  ,
            width:400,
            // height:20
        }  ,
            series: [{
                name: '销量',
                type: 'bar',
                data: [120, 200, 150, 80, 70, 110, 130],
            }]
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
.promotion {
  width: 358px;
  height: 202px;
  box-shadow: 0px 2px 4px 0px rgba(227, 227, 227, 0.4);
  background-color: #fff;
  border-radius: 10px;
  .promotionContent {
    box-sizing: border-box;
    padding: 7px 15px 0 20px;
    div .num {
      display: inline-block;
      text-align: center;
      line-height: 54px;
      height: 54px;
      color: rgba(0, 0, 0, 1);
      font-size: 36px;
      font-weight: 700;
      // border: solid 1px blue;
    }
  }
}
</style>