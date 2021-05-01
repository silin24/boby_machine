<template>
  <div class="addressCard">
    <div class="up">
      <div class="address">
        <span>南坪店大门左侧</span>
        <van-icon name="cross" />
      </div>
      <span class="detailAddress">重庆市南岸区南坪南路142号附5号</span>
    </div>
    <div class="down">
      <span class="deviceNum">该地址有5台设备</span>
      <van-button type="info" class="btn" @click="$router.push('/addAddress')">编辑</van-button>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .addressCard {
    width: 358px;
    height: 119px;
    border-radius: 10px;
    background-color: #fff;
    padding: 0 18px;
    box-sizing: border-box;
    .up {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: 65px;
      .address {
        display: flex;
        justify-content: space-between;
        color: rgba(16, 16, 16, 100);
        font-size: 18px;
      }
      .detailAddress {
        opacity: 0.7;
        color: rgba(16, 16, 16, 100);
        font-size: 12px;
        margin-top: 10px;
      }
    }
    .down {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .deviceNum {
        opacity: 0.7;
        color: rgba(16, 16, 16, 100);
        font-size: 12px;
      }
      .btn {
        width: 62px;
        height: 29px;
        border-radius: 8px;
        color: #fff;
      }
    }
  }
</style>