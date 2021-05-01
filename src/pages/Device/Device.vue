<template>
  <section class="device">
    <div class="deviceContainer">
      <div class="deviceHeader">
        <van-button plain type="primary" class="btn" @click="$router.push('/addressManage')">地址管理</van-button>
        <van-button plain type="primary" class="btn" @click="$router.push('/comboManage')">套餐管理</van-button>
        <van-button type="info" class="btn" @click="$router.push('/addDevice')">添加设备</van-button>
      </div>
      <div class="deviceChange">
        <div :class="{active:isShowNormal}" @click="isShowNormal=true">
          <span>在线</span>
          <span>(3)</span>
        </div>
        <div :class="{active:!isShowNormal}" @click="isShowNormal=false">
          <span>不在线</span>
          <span>(0)</span>
        </div>
      </div>
      <div class="deviceShow">
        <ul>
          <li>
            <DeviceCard/>
          </li>
          <li>
            <DeviceCard/>
          </li>
          
        </ul>

      </div>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
import DeviceCard from '../../components/DeviceCard/DeviceCard'
  export default {
    components:{DeviceCard},
    data() {
      return {
        isShowNormal:true
      }
    },
  }
</script>

<style scoped lang="scss">
.device {
  width: 390px;
  height: 923px;
  background-color: #F2F2F2;
  overflow: hidden;
 .deviceContainer {
   box-sizing: border-box;
   padding: 0 16px;
   .deviceHeader {
     margin-top: 27px;
     display: flex;
     justify-content: space-between;
     .btn {
       width: 110px;
       height: 33px;
       border-radius: 8px;
       font-size: 14px;
     }
   }
   .deviceChange {
    height: 70px;
    // background-color: pink;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      color: rgba(16, 16, 16, 100);
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
      height: 4px;
      border-radius: 4px;
      background-color: blue;
     }
    }
  }
  .deviceShow {
      ul{
        li{
          margin-bottom: 15px;
        }
      }
  }
 }
}
</style>
