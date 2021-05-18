<template>
  <div class="cardHeader">
      <span>{{title}}</span>
      <div @click="change">
        <span :class="{active:day}" class="day">昨日</span>
        <span :class="{active:week}" class="week">近7日</span>
        <span :class="{active:month}" class="month">近30日</span>
      </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: "数据",
     }
    },
    data() {
      return {
        day:true,
        week:false,
        month:false
      }
    },
    methods: {
      change(e){
        // console.log(e);
        // console.log(e.target.classList[0]);
        // let a = e.target.classList[0]
        if (e.target.classList[0] === 'week') {
          this.week = true
          this.month = false
          this.day = false
        } else if (e.target.classList[0] === 'month') {
          this.month = true
          this.week = false
          this.day = false
        } else {
          this.day = true
          this.month = false
          this.week = false
        }
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
    // font-weight: bold;
    div {
      display: flex;
      justify-content: space-between;
      width: 133px;
      color: rgba(0, 0, 0, 0.6);
      font-size: 12px;
      span {
        &.active {
          font-weight: 700;
          color: #000;
        }
      }
    }
  }
</style>