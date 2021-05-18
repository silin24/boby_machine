<template>
  <div class="deviceContainer">
    <div class="deviceHeader">
      <div class="deviceHeaderContainer">
        <van-button
          plain
          type="primary"
          class="btn"
          @click="$router.push('/device/addressManage')"
          >地址管理</van-button
        >
        <van-button
          plain
          type="primary"
          class="btn"
          @click="$router.push('/device/comboManage')"
          >套餐管理</van-button
        >
        <van-button
          type="info"
          class="btn"
          @click="$router.push('/device/addDevice')"
          >添加设备</van-button
        >
      </div>
    </div>
    <div class="deviceTabs">
      <van-tabs v-model="active" background="#F2F2F2" color="#007aff">
          <van-tab title="在线(3)" :title-style="{'font-size':'16px'}" class="online">
            <div><DeviceCard/></div>
            <div><DeviceCard/></div>
            <div><DeviceCard/></div>
            <div><DeviceCard/></div>
            <div><DeviceCard/></div>
          </van-tab>
          <van-tab title="不在线(0)" :title-style="{'font-size':'16px'}">内容 4</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { Tab, Tabs } from 'vant';
import DeviceCard from "../../components/DeviceCard/DeviceCard";
export default {
  components:{
    DeviceCard,
    'van-tab':Tab,
    'van-tabs':Tabs,
  },
  data() {
    return {
      active:0
    };
  },
};
</script>

<style scoped lang="scss">
  .deviceContainer {
    width: 390px;
    background-color: #f2f2f2;
    .deviceHeader {
      .deviceHeaderContainer {
        display: flex;
        justify-content: space-between;
        padding: 27px 16px 0;
        box-sizing: border-box;
        .btn {
          width: 110px;
          height: 33px;
          border-radius: 8px;
          font-size: 14px;
        }
      }
    }
    .deviceTabs {
      margin-top: 20px;
      padding: 0 16px;
      padding-bottom: 68px;
      box-sizing: border-box;
      overflow: hidden;
      .online {
        div {
          margin-top: 12px;
        }
      }
    }
  }
</style>
