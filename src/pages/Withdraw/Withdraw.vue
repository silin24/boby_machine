<template>
  <div class="withdraw">
    <div class="header">
      <span>提交后，3个工作日内转款，请留意你的收款账户</span>
    </div>
    <div class="withdrawInfo">
      <div class="withdrawType">
        <span>提现类型</span>
        <van-radio-group v-model="radio" direction="horizontal">
          <van-radio name="1">设备收益</van-radio>
          <van-radio name="2">广告收益</van-radio>
        </van-radio-group>
      </div>
      <div class="withdrawMoney">
        <div class="up">
          <span>可提现金额</span>
          <span class="moneyNum">￥8525.00</span>
        </div>
        <div class="down">
          <!-- <input type="num" placeholder="￥请输入"> -->
          <van-field v-model="value" placeholder="￥请输入" class="self" />
        </div>
      </div>
      <div class="serviceCharge">
        <span>手续费</span>
        <span >8.53</span>
      </div>
      <div class="times">
        <span>本月剩余提现次数</span>
        <span >2次</span>
      </div>
      <div class="notice">
        <span>打款后通知我</span>
        <van-switch v-model="checked" size="20px"/>
      </div>
      <van-field label="请填写手机号"  placeholder="请填写" input-align="right" is-link size="large"/>
      <div class="manageAccount">
        <van-field label="管理收款账户"  placeholder="去管理" input-align="right" is-link size="large"/>
      </div>
    </div>
    <div class="footer">
        为确保您的资金安全，变更收款账户需本人提交证明资料,经平台核实后，方可变更
      <div class="footerBtn">
        <van-button type="default" class="cancel">取消</van-button>
        <van-button type="info" class="add">添加</van-button>
    </div>
    </div>
  </div>
</template>

<script>
import { Field ,CellGroup ,Form ,Checkbox,Picker,Popup ,RadioGroup, Radio ,Switch } from 'vant';
  export default {
    components:{
      'van-field':Field,
      'van-form':Form ,
      'van-cell-group':CellGroup,
      'van-checkbox':Checkbox,
      'van-picker':Picker ,
      'van-popup':Popup  ,
      'van-radio-group':RadioGroup  ,
      'van-radio':Radio  ,
      'van-switch':Switch,
    },
    data() {
      return {
        value: '',
        checked: true,
        columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
        showPicker: false,
        radio:'1'
      };
    },
     methods: {
      onConfirm(value) {
        this.value = value;
        this.showPicker = false;
      },
    },
  }
</script>


<style lang="scss" scoped>
  .withdraw {
    width: 390px;
    height: 100vh;
    background-color: #f2f2f2;
    .header {
      height: 44px;
      padding: 0 0 0 15px;
      line-height: 44px;
      background-color: #f2f2f2;
      color: rgba(16, 16, 16, 100);
      font-size: 14px;
    }
    .withdrawInfo {
      .withdrawType {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 45px;
        background-color: #fff;
        padding: 0 15px;
        box-sizing: border-box;
        border-bottom: 2px solid #f2f2f2;
        color: #646566;
        font-size: 16px;
      }
      .withdrawMoney {
        height: 122px;
        background-color: #fff;
        border-bottom: 2px solid #f2f2f2;
        .up {
          height: 45px;
          line-height: 45px;
          display: flex;
          justify-content: space-between;
          padding: 0 15px;
          box-sizing: border-box;
          color: #646566;
          font-size: 16px;
          .moneyNum {
            color: #FFD207;
          }
        }
        .down {
          line-height: 77px;
          // opacity: 0.1;
          color: rgba(3, 3, 3, 100);
          font-size: 48px;
          padding: 0 15px;
          box-sizing: border-box;
          .self {
            font-size: 30px;
          }
        }
      }
      .serviceCharge {
        background-color: #fff;
        height: 45px;
        line-height: 45px;
        display: flex;
        justify-content: space-between;
        border-bottom: 2px solid #f2f2f2;
        padding: 0 15px;
        box-sizing: border-box;
        color: #646566;
        font-size: 16px;
      }
      .times {
        background-color: #fff;
        height: 45px;
        line-height: 45px;
        display: flex;
        justify-content: space-between;
        border-bottom: 2px solid #f2f2f2;
        padding: 0 15px;
        box-sizing: border-box;
        color: #646566;
        font-size: 16px;
      }
      .notice {
        background-color: #fff;
        margin-top: 13px;
        height: 45px;
        background-color: #fff;
        color: #646566;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 12px;
        border-bottom: 2px solid #f2f2f2;
        padding: 0 14px;
      }
      .manageAccount {
        margin-top: 12px;
      }
    }
    .footer {
      margin-top: 12px;
      padding: 0 14px;
      font-size: 14px;
      line-height: 20px;
      .footerBtn {
        position: fixed;
        left: 0;
        bottom: 0;
        .cancel {
          color: blue;
          width: 195px;
          height: 50px;
          font-size: 18px;
        }
        .add{
          width: 195px;
          height: 50px;
          font-size: 18px;
        }
      }

    }
  }
</style>