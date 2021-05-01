<template>
  <div class="withdraw">
    <div class="up">
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
    </div>
  </div>
</template>

<script>
import { Field ,CellGroup ,Form ,Checkbox,Picker,Popup ,RadioGroup, Radio  } from 'vant';
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
    .up {
      height: 44px;
      padding: 0 0 0 14px;
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
        height: 46px;
        background-color: #fff;
        padding: 0 15px;
        box-sizing: border-box;
        color: #646566;
        font-size: 16px;
      }
    }
  }
</style>