<template>
  <div class="adIncome">
    <CardHeader title="广告收益"/>
    <div class="adIncomeContent">
      <div>
        <span class="num">120</span>
        <span>元</span>
      </div>
      <div class="adIncomeChart">
        <!-- <BarChart/> -->
      </div>
    </div>

  </div>
</template>

<script>
import BarChart from '../Chart/BarChart/BarChart'
import CardHeader from '../CardHeader/CardHeader'
  export default {
    components:{BarChart,CardHeader}
  }
</script>

<style lang="scss" scoped>
.adIncome {
  width: 358px;
  height: 208px;
  box-shadow: 0px 2px 4px 0px rgba(227, 227, 227, 0.4);
  background-color: #fff;
  border-radius: 10px;
  .adIncomeContent {
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