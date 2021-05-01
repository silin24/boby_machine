<template>
  <div class="deviceCard">
    <div class="deviceCardHeader">
      <div class="left">
        <span class="deviceName">娃娃机2号 FJG329FV25</span>
        <span>大厅左门第二台</span>
      </div>
      <van-button  type="primary" class="addBtn" text="广告"></van-button>
    </div>
    <div class="deviceCardContent">
      <div class="device">
        <img src="../../common/imgs/18.png" alt="pic">
        <div class="deviceInfo">
          <div>
            <span>启动设备:</span>
            <span>43566次</span>
          </div>
          <div>
            <span>发送视频:</span>
            <span>3520次</span>
          </div>
          <div>
            <span>设备收益:</span>
            <span>340次</span>
          </div>
          <div>
            <span>广告收益:</span>
            <span>58次</span>
          </div>
          <div>
            <span>视频库存:</span>
            <span>2853次</span>
          </div>
        </div>
      </div>
      <div class="deviceCardChoice">
        <van-button plain type="info" class="btn1" text="二维码"></van-button>
        <van-button plain type="info" class="btn2" text="投放视频" color="red"></van-button>
        <van-button plain type="info" class="btn3" text="套餐"></van-button>
        <van-button type="info" class="btn4" text="编辑"></van-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  
  }
</script>

<style lang="scss" scoped>
.deviceCard {
  width: 358px;
  height: 249px;
  border-radius: 12px;
  position: relative;
  box-sizing: border-box;
  padding: 0 16px 0 21px;
  background-color: #fff;
  box-shadow: 0px 2px 4px 0px rgba(227, 227, 227, 40);
  .deviceCardHeader {
    width: 358px;
    height: 69px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      flex-direction: column;
      font-size: 12px;
      opacity: 0.7;
      color: rgba(16, 16, 16, 0.7);
      .deviceName {
        color: rgba(16, 16, 16, 100);
        font-size: 18px;
        margin-bottom: 5px;
      }
    }
    .addBtn {
      width: 62px;
      height: 29px;
      border-radius: 8px;
      color: rgba(255, 255, 255, 100);
      font-size: 12px;
      margin-right: 40px;
    }
  }
  .deviceCardContent {
    .device {
      box-sizing: border-box;
      display: flex;
     img {
       width: 105px;
       height: 104px;
       border: 1px solid pink;
       margin-right: 16px;
     }
     .deviceInfo {
       display: flex;
       flex-direction: column;
       div {
         display: flex;
         span {
           line-height: 22px;
           margin-right: 5px;
           color: rgba(174, 174, 178, 100);
         }
       }
     }
    }
    .deviceCardChoice {
      margin-top: 20px;
      display: flex;
      justify-content: flex-end;
      .btn1 {
        margin-left: 8px;
        width: 76px;
        height: 29px;
        border-radius: 5px;
      }
      .btn2 {
        margin-left: 8px;
        width: 90px;
        height: 29px;
        border-radius: 5px;

      }
      .btn3 {
        margin-left: 8px;
        width: 64px;
        height: 29px;
        border-radius: 5px;
      }
      .btn4 {
        margin-left: 8px;
        width: 64px;
        height: 29px;
        border-radius: 5px;
      }
    }
  }
}
</style>