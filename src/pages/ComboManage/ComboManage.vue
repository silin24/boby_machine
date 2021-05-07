<template>
  <div class="comboManage">
    <div class="comboContainer">
      <div class="qq">
        <!-- <div>
          <div><ComboCard/></div>
          <div><ComboCard/></div>
          <div><ComboCard/></div>
          <div><ComboCard/></div>
          <div><ComboCard/></div>
          <div><ComboCard/></div>
        </div> -->
        
        <ul>
          <li>
        <ComboCard/>
          </li>
          <li>
        <ComboCard/>
          </li>
          <li>
        <ComboCard/>
          </li>
          <li>
        <ComboCard/>
          </li>
        </ul>
      </div>
    </div>
    <div class="add" @click="$router.push('/addCombo')">
      <van-icon name="plus" />
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll";

import ComboCard from '../../components/ComboCard/ComboCard'
  export default {
    components:{ComboCard},
    mounted() {
      new BScroll(".qq", {
        scrollY: true, // 纵向滑动
        click: true, // 允许点击
        bounce: false
      });
    },
  }
</script>

<style lang="scss" scoped>
  .comboManage {
    width: 390px;
    height: 100vh;
    background-color: #f2f2f2;
    .comboContainer {
      box-sizing: border-box;
      padding: 20px 16px 0 16px;
      .qq {
        height: calc(100vh - 120px);
        overflow: hidden;
        // div {
        //   div {
        //     margin-bottom: 13px;
        //   }
        // }
        ul {
          li {
            margin-bottom: 13px;
          }
        }
      }
    }
    .add {
      position: absolute;
      bottom: 30px;
      left: 30px;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background-color: #3955F6;
      text-align: center;
      line-height: 62px;
      font-size: 25px;
      color: #fff;
    }
  }
</style>