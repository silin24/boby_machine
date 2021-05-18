<template>
  <div class="comboCard">
    <div class="comboName">
      <span>默认套餐</span>
      <span class="comboUseNum">6台设备使用该套餐</span>
    </div>
    <van-icon name="cross"  class="deleteCombo" @click="deleteCombo"/>
    <div class="comboInfo">
      <div class="combo">
        <span>2元1次</span>
        <span>10元5次</span>
        <span>20元12次</span>
        <span>30元18次</span>
        <span>40元25次</span>
        <span>10元5次</span>
      </div>
      <van-button  type="info" class="btn" @click="$router.push('/addCombo')">编辑</van-button>
    </div>

  </div>
</template>

<script>
  export default {
    methods: {
      deleteCombo() {
        console.log('deleteCombo');
      }
    },
  }
</script>

<style lang="scss" scoped>
  .comboCard {
    width: 358px;
    border-radius: 10px;
    background-color: #fff;
    position: relative;
    // background-color: red;
    .comboName {
      height: 75px;
      padding-left: 18px;
      box-sizing: border-box;
      margin-bottom: 25px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      color: rgba(16, 16, 16, 100);
      font-size: 18px;
      .comboUseNum {
        margin-top: 12px;
        opacity: 0.7;
        color: rgba(16, 16, 16, 0.7);
        font-size: 12px;
      }
    }
    .deleteCombo {
      position: absolute;
      top: 16px;
      right: 16px;
      font-size: 24px;
    }
    .comboInfo {
      // display:inline-block;
      .combo {
        width: 280px;
        padding-left: 18px;
        padding-bottom: 16px;
        box-sizing: border-box;
        span {
          display: inline-block;
          width: 71px;
          height: 29px;
          text-align: center;
          line-height: 29px;
          border: 1px solid #FFD207;
          border-radius: 20px;
          margin-right: 9px;
          margin-top: 9px;
        }
      }
      .btn {
        width: 62px;
        height: 29px;
        border-radius: 5px;
        position: absolute;
        bottom: 16px;
        right: 16px;
      }
    }
  }
</style>