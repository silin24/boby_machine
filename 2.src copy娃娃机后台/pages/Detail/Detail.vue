<template>
  <div class="detail">
    <div class="detailHeader">
      <div :class="{active:isShowAll}" @click="isShowAll=true">
        <span>近30天</span>
      </div>
      <div :class="{active:!isShowAll}" @click="isShowAll=false">
        <span>近半年</span>
      </div>
    </div>
    <div class="detailTotal">
      <div class="totalUp">
        <span>累计收益(元)</span>
        <span class="totalUpNum">1500.00</span>
      </div>
      <div class="totalDown">
        <div>
          <span>在线支付</span>
          <span>191.00</span>
          </div>
        <div>
          <span>广告</span>
          <span>1399.00</span>
        </div>
        <div>
          <span>线下兑币</span>
          <span>0.00</span>
        </div>
      </div>
      <!-- <van-button type="primary" class="withdrawBtn"> -->
        <div class="withdrawBtn" @click="toWithdraw">
        <van-icon name="cash-back-record"  />
        <span>提现</span>
        </div>
      <!-- </van-button> -->
    </div>
    <div class="detailShow">
      <div class="month" :class="{on:isShowAll}">
        <van-cell-group>
          <van-field  label="今天" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="5月5日" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="5月4日" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="10月3日" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="5月4日" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="10月3日" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="5月4日" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="10月3日" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="5月4日" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="10月3日" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="10月3日" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="5月4日" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="10月3日" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="5月4日" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="10月3日" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="5月4日" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="10月3日" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="10月3日" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="5月4日" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="10月3日" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="5月4日" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="10月3日" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="5月4日" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="10月3日" placeholder="0.00元" input-align="right" is-link size="large"/>
        </van-cell-group>
      </div>
      <div class="halfYear" :class="{on:!isShowAll}">
        <van-cell-group>
          <van-field  label="今天" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="5月5日" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="5月4日" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="10月3日" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="5月4日" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="10月3日" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="5月4日" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="10月3日" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="5月4日" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="10月3日" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="10月3日" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="10月3日" placeholder="0.00元" input-align="right" is-link size="large"/>
          <van-field  label="10月3日" placeholder="0.00元" input-align="right" is-link size="large"/>
        </van-cell-group>
      </div>
    </div>
  </div>
</template>

<script>
import { Field ,CellGroup ,Form } from 'vant';
  export default {
    components:{
      'van-field':Field,
      'van-form':Form ,
      'van-cell-group':CellGroup,
    },
  data () {
    return {
      isShowAll:true
    }
  },
  mounted(){
  },
  methods: {
    toWithdraw(){
      this.$router.push('/withdraw')
    }
  }
}
</script>

<style scoped lang="scss">
  .detail {
    width: 390px;
    box-sizing: border-box;
    padding: 0 17px;
    background-color: #f2f2f2;
    height: 100vh;
    .detailHeader {
      height: 70px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      div {
        color: #323233;
        font-size: 16px;
        position: relative;
        &.active{
          // color: aqua;
          span {
            font-weight: 700;
          }
        }
        &.active::after {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 4px;
          content: '';
          display: block;
          width: 30px;
          height: 3px;
          border-radius: 4px;
          background-color: #007aff;
      }

      }
    }
    .detailTotal {
      height: 150px;
      // border-radius: 10px;
      background-color: #007aff;
      color: #fff;
      font-size: 14px;
      position: relative;
      .withdrawBtn {
        position: absolute;
        top: 5px;
        right: 5px;
        // border: 1px solid red;
        font-size: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
        // color: red;
        span {
          font-size: 12px;
        }
      }
      .totalUp {
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .totalUpNum {
          margin-top: 10px;
          font-size: 22px;
        }

      }
      .totalDown {
        height: 50px;
        display: flex;
        background-color: #558DF0;
        div {
          flex:1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
        }

      }
    }
    .detailShow {
      margin-top: 20px;
      >div{
        display: none;
        &.on{
          display: block
        }
      }
      .month {
        height: calc(100vh - 305px);
        overflow: scroll;
      }
      .halfYear {
        height: calc(100vh - 305px);
        overflow: scroll;
      }
    }
  }
</style>
