<template>
  <section class="video">
    <div class="videoContainer">
      <div class="videoHeader">
        <van-button plain type="primary" class="btn">投放到设备</van-button>
        <van-button plain type="primary" class="btn">拍摄教程</van-button>
        <van-button type="info" class="btn" @click="$router.push('/video/addlibrary')">添加库</van-button>
      </div>
      <div class="videoChange">
        <div :class="{active:isShowNormal}" @click="isShowNormal=true">
          <span>正常</span>
          <span>(3)</span>
        </div>
        <div :class="{active:!isShowNormal}" @click="isShowNormal=false">
          <span>作废</span>
          <span>(0)</span>
        </div>
      </div>
      <div class="videoShow">
        <ul>
          <li>
            <VideoCard/>
          </li>
          <li>
            <VideoCard/>
          </li>
          <li>
            <VideoCard/>
          </li>
          <li>
            <VideoCard/>
          </li>
        </ul>

      </div>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";

import VideoCard from '../../components/VideoCard/VideoCard'
  export default {
    components:{VideoCard},
    data() {
      return {
        isShowNormal:true
      }
    },
    mounted() {
      new BScroll(".videoShow", {
        scrollY: true, // 纵向滑动
        click: true, // 允许点击
      });
    },
  }
</script>

<style scoped lang="scss">
.video {
  width: 390px;
  // height: 923px;
  padding-bottom: 10px;
  background-color: #F2F2F2;
  overflow: hidden;
 .videoContainer {
   box-sizing: border-box;
   padding: 0 16px;
   .videoHeader {
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
   .videoChange {
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
        height: 3px;
        border-radius: 4px;
        background-color: #007aff;
     }
    }
  }
  .videoShow {
    height: calc(100vh - 192px);
    overflow: hidden;
      ul{
        li{
          margin-bottom: 15px;
        }
      }
  }
 }
}
</style>
