<template>
  <div class="videoCard">
    <div class="videoCardHeader">
      <div>
        <span class="videoName">圣诞节视频素材库</span>
        <span>仅用作圣诞节活动</span>
      </div>
      <van-button plain type="primary" class="button">启用</van-button>
    </div>
    <div class="videoCardContent">
      <div class="videoCheck">
        <span class="num">未审核</span>
        <span>健康度</span>
      </div>
      <div class="videoInfo">
        <div>
          <span>片段</span>
          <span>385</span>
        </div>
        <div>
          <span>预计合成</span>
          <span>85</span>
        </div>
        <div>
          <span>场景</span>
          <span>5</span>
        </div>
      </div>
      <van-button type="info" class="button" text="编辑"></van-button>
    </div>
  </div>
</template>

<script>
  export default {
  
  }
</script>

<style lang="scss" scoped>
.videoCard {
  width: 358px;
  height: 158px;
  border-radius: 12px;
  position: relative;
  background-color: #fff;
  box-shadow: 0px 2px 4px 0px rgba(227, 227, 227, 40);
  .videoCardHeader {
    width: 358px;
    height: 69px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 16px 0 18px;
    div {
      display: flex;
      flex-direction: column;
      color: rgba(16, 16, 16, 100);
      font-size: 12px;
      .videoName {
        color: rgba(16, 16, 16, 100);
        font-size: 18px;
        margin-bottom: 5px;
      }
    }
    .button {
      width: 62px;
      height: 29px;
      border-radius: 8px;
    }
  }
  .videoCardContent {
    .videoCheck {
      box-sizing: border-box;
      height: 54px;
      line-height: 54px;
      padding-left:18px;
      .num {
        color: rgba(34, 185, 61, 100);
        font-size: 36px
      }
    }
    .videoInfo {
      line-height: 35px;
      padding-left:18px;
      display: flex;
      color: rgba(174, 174, 178, 100);
      font-size: 12px;
      div {
        margin-right: 16px;
        span {
          margin-right: 5px;
        }
      }
    }
    .button {
      position: absolute;
      bottom: 12px;
      right: 16px;
      width: 62px;
      height: 29px;
      border-radius: 8px;
      color: rgba(255, 255, 255, 100);
      background-color:  rgba(57, 85, 246, 100);
      font-size: 14px;
    }
  }
}
</style>