<template>
  <div class="addDevice">
    <div class="help">
      <span>请添加您的设备，如需帮助，请点我</span>
      <van-icon name="info" color="#1989fa"  size="18"  class="helpIcon"/>
    </div>
     <div class="deviceInfo">
        <van-cell-group>
          <van-field  label="扫码添加" placeholder="请输入用户名" input-align="right" is-link size="large"/>
          <van-field  label="设备名称" placeholder="请输入该设备名称" input-align="right" is-link size="large"/>
          <van-field  label="设备备注" placeholder="备注该设备，如二楼第二台" input-align="right" is-link size="large"/>
          <van-field v-model="value" label="设备类型" placeholder="请选择" input-align="right" is-link size="large" @click="showPicker = true"/>
            <van-popup v-model="showPicker" position="bottom">
              <van-picker
                show-toolbar
                :columns="columns"
                @confirm="onConfirm"
                @cancel="showPicker = false"
              />
            </van-popup>
          <van-field  label="设备激活密钥" placeholder="请填写" input-align="right" is-link size="large"/>
        </van-cell-group>
    </div>
    <div class="deviceSite">
      <van-cell-group>
        <van-field  label="投放地址" placeholder="请准确填写地址，以便维护" input-align="right" is-link size="large"/>
      </van-cell-group>
    </div>
    <div class="deviceCost">
      <van-cell-group>
        <van-field  label="免费次数" placeholder="2" input-align="right" is-link size="large"/>
        <van-field  label="收费套餐" placeholder="请选择" input-align="right" is-link size="large"/>
      </van-cell-group>
    </div>
    <div class="deviceAd">
      <!-- <van-cell-group>
        <van-field v-model="value" label="接受广告投放" placeholder="2" input-align="right" is-link size="large"/>
      </van-cell-group> -->
      <span>接受广告投放</span>
      <van-checkbox v-model="checked"></van-checkbox>
    </div>
     <div class="deviceAdmin">
      <van-cell-group>
        <van-field  label="免费次数" placeholder="可不分配" input-align="right" is-link size="large"/>
      </van-cell-group>
    </div>
    <div class="addDeviceFooter">
      <van-button type="default" class="cancel" @click="$router.back()">取消</van-button>
      <van-button type="info" class="add">添加</van-button>
    </div>
  </div>
</template>

<script>
import { Field ,CellGroup ,Form ,Checkbox,Picker,Popup  } from 'vant';
  export default {
    components:{
      'van-field':Field,
      'van-form':Form ,
      'van-cell-group':CellGroup,
      'van-checkbox':Checkbox,
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
.addDevice {
  background-color: #f2f2f2;
  width: 390px;
  .help {
    height: 44px;
    line-height: 44px;
    color: rgba(16, 16, 16, 100);
    font-size: 14px;
    box-sizing: border-box;
    padding-left: 14px;
    position: relative;
    .helpIcon {
      position: absolute;
      top: 14px;
      right: 125px;
    }
  }
  .deviceSite {
    margin-top: 12px;
  }
  .deviceCost {
    margin-top: 12px;

  }
  .deviceAd {
    margin-top: 12px;
    height: 45px;
    line-height: 45px;
    background-color: #fff;
    display: flex;
    font-size: 16px;
    color: #646566;
    padding:0 18px 0 14px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between
  }
  .deviceAdmin{
    margin-top: 12px;

  }
  .addDeviceFooter {
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