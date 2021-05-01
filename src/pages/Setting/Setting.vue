<template>
  <div class="setting">
    <div class="header">
      <img src="../../common/imgs/avator.png" alt="avator">
      <h2>半山酒馆</h2>
      <div>
        <span>3星商户</span>
      </div>
    </div>
    <div class="SettingMessage">
      <div class="MerchantName">
        <van-cell-group>
          <van-field  label="商户名称" placeholder="请填写您的商户名称" input-align="right" is-link size="large"/>
        </van-cell-group>
      </div>
      <div class="gap13"></div>
      <div>
        <van-cell-group>
          <van-field  label="商户地址" placeholder="请填写" input-align="right" is-link size="large"/>
          <van-field  label="手机号码" placeholder="请填写" input-align="right" is-link size="large"/>
        </van-cell-group>
      </div>
      <div class="gap13"></div>
      <div>
        <div class="collectMoneyMethod">
          <span>收款方式</span>
          <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="1">微信</van-radio>
            <van-radio name="2">支付宝</van-radio>
          </van-radio-group>
        </div>
        <van-cell-group>
          <van-field  label="收款账号" placeholder="扫码绑定" input-align="right" is-link size="large"/>
        </van-cell-group>
      </div>
      <div class="gap13"></div>
      <div>
        <van-cell-group>
          <van-field  label="员工管理" placeholder="去管理" input-align="right" is-link size="large"/>
        </van-cell-group>
      </div>
      <div class="gap13"></div>
      <div>
        <van-cell-group>
          <van-field  label="登录账号" type="number" placeholder="188888888" input-align="right" is-link size="large"/>
          <van-field  label="登录密码" type="password" placeholder="******" input-align="right" is-link size="large"/>
        </van-cell-group>
      </div>
    </div>
    <div class="settingFooter">
      <van-button type="default" class="cancel">取消</van-button>
      <van-button type="info" class="add">添加</van-button>
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
  .setting {
    background-color: #f2f2f2;
    height: 100vh;
    .header {
      width: 390px;
      height: 179px;
      background: #6057FF;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        // border: 1px solid #fff;
        margin-bottom: 10px;
      }
      h2 {
        margin-bottom: 10px;
        color: rgba(255, 255, 255, 100);
        font-size: 18px;
      }
      div {
        width: 62px;
        height: 20px;
        border-radius: 20px;
        color: rgba(255, 210, 7, 100);
        border: 1px solid rgba(255, 210, 7, 100);
        font-size: 12px;
        text-align: center;
        line-height: 20px;
        
      }
    }
    .SettingMessage {
      .gap13 {
        height: 13px;
      }
      .collectMoneyMethod {
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
    .settingFooter {
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
</style>