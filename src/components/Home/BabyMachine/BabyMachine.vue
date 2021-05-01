<template>
  <section class="babyMachine">
    <CardHeader title="娃娃机收益" />
    <div class="content">
      <div class="incomeInfo">
        <div class="income">
          <span class="num">580.00</span>
          <span>元</span>
        </div>
        <div class="info">
          <div class="playNum">
            <span>抓娃娃</span>
            <span>240</span>
          </div>
          <div class="userNum">
            <span>用户</span>
            <span>188</span>
          </div>
        </div>
      </div>
      <div class="pie">
        <PieChart/>
        <!-- <Myecharts :chartsid="'toyear'" :option="toYear"></Myecharts> -->
      </div>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
import CardHeader from "../CardHeader/CardHeader";
import PieChart from '../Chart/PieChart/PieChart'
import Myecharts from '../../Myecharts'
export default {
  components: { CardHeader,PieChart ,Myecharts},
  data() {
    return {
      toYear: {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: '3%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: [],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '消耗点数',
            type: 'bar',
            barWidth: '60%',
            itemStyle: {
              normal: {
                color: '#6A80C8'
              }
            },
            data: []
          }
        ]
      },
    }
  },
};
</script>

<style scoped lang="scss">
.babyMachine {
  width: 358px;
  height: 175px;
  box-shadow: 0px 2px 4px 0px rgba(227, 227, 227, 0.4);
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  .content {
    .incomeInfo {
      position: absolute;
      bottom: 20px;
      left: 18px;
      display: flex;
      flex-direction: column;
      .income .num {
          display: inline-block;
          text-align: center;
          line-height: 54px;
          height: 54px;
          color: rgba(0, 0, 0, 1);
          font-size: 36px;
          font-weight: 700;
        }
      .info {
        display: flex;
        color: rgba(174, 174, 178, 100);
        .playNum {
          margin-right: 15px;
        }
      }
    }
    .pie {
      position: absolute;
      bottom: 18px;
      right: 20px;
    }
  }
}
</style>
