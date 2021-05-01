<template>
  <div class="cardHeader">
      <span>{{title}}</span>
      <div>
        <span>昨日</span>
        <span>近7日</span>
        <span>近30日</span>
      </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: "数据"
     }
    },
  }
</script>

<style scoped lang="scss">
.cardHeader {
    width: 358px;
    height: 46px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px 15px 0 20px;
    color: rgba(0, 0, 0, 1);
    font-size: 16px;
    div {
      display: flex;
      justify-content: space-between;
      width: 133px;
      color: rgba(0, 0, 0, 0.6);
      font-size: 12px;
    }
  }
</style>