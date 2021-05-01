<template>
  <div class="addAddress">
    <div class="up">
      <span>请准确填写地址，享受快捷上门服务</span>
    </div>
    <div class="middle">
      <van-cell-group>
        <van-field v-model="value" label="所属门店" placeholder="如：肯德基江北分店" input-align="right" is-link size="large" @click="showPicker = true"/>
          <van-popup v-model="showPicker" position="bottom">
            <van-picker
              show-toolbar
              :columns="columns"
              @confirm="onConfirm"
              @cancel="showPicker = false"
            />
          </van-popup>
        <van-field  label="地图定位"size="large" :border="false" readonly/>
        <van-field  placeholder="重庆市江北区鹏润蓝海105号C座楼下500米" input-align="left" is-link size="large"/>
        <van-field  label="地图定位" placeholder="选填" input-align="right" is-link size="large"/>
      </van-cell-group>
    </div>
    <div class="down">
      <span>是否为默认套餐</span>
      <van-switch v-model="checked" size="20px"/>
    </div>


  </div>
</template>

<script>
import { Field ,CellGroup ,Form ,Switch,Picker,Popup  } from 'vant';
  export default {
    components:{
      'van-field':Field,
      'van-form':Form ,
      'van-cell-group':CellGroup,
      'van-switch':Switch,
      'van-picker':Picker ,
      'van-popup':Popup  ,
    },
    data() {
      return {
        value: '',
        checked: true,
        columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
        showPicker: false,
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
  .addAddress {
    width: 390px;
    height: 100vh;
    background-color: #f2f2f2;
    .up {
      padding: 14px 0 0 14px;
      box-sizing: border-box;
      color: rgba(16, 16, 16, 100);
      font-size: 14px;
      height: 44px;
    }
    .down {
      margin-top: 13px;
      height: 45px;
      background-color: #fff;
      color: rgba(3, 3, 3, 100);
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 14px;
    }
  }
</style>