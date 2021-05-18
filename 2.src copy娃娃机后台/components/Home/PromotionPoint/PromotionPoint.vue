<template>
  <div class="promotionPoint">
    <div class="promotionPointHeader">
      <span>剩余推广点</span>
      <van-button type="info" class="button">充值</van-button>
    </div>
    <div class="promotionPointContent">
      <div>
        <span class="num">2624</span>
        <span>点</span>
      </div>
      <div class="promotionProgress">
        <van-progress :percentage="50" stroke-width="10px" :show-pivot='false'/>
      </div>
      <div class="promotionInfo">
        <div>
          <span>昨日消耗</span>
          <span>188</span>
        </div>
        <div>
          <span>近7天消耗</span>
          <span>1889</span>
        </div>
        <div>
          <span>近30天消耗</span>
          <span>18855</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {Progress } from 'vant'
import BarChart from '../Chart/BarChart/BarChart'
import CardHeader from '../CardHeader/CardHeader'

  export default {
    components:{
      BarChart,
      CardHeader,
     'van-progress' :Progress
  }
  }
</script>

<style lang="scss" scoped>
.promotionPoint {
  width: 358px;
  height: 183px;
  box-shadow: 0px 2px 4px 0px rgba(227, 227, 227, 0.4);
  background-color: #fff;
  border-radius: 10px;
  .promotionPointHeader {
    width: 358px;
    height: 46px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px 15px 0 20px;
    color: rgba(0, 0, 0, 1);
    font-size: 16px;
    .button {
      width: 70px;
      height: 29px;
      border-radius: 3px;
      // font-size: 12px;
    }
  }
  .promotionPointContent {
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
    .promotionProgress {
      margin-top: 12px;
    }
    .promotionInfo {
      margin-top: 20px;
      border-top: 1px solid rgba(187, 187, 187, 100);
      opacity: 0.7;
      padding-top: 8px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      color: rgba(174, 174, 178, 100);
      font-size: 12px;
      div span{
        margin-right: 5px;
      }
    }
  }
}
</style>