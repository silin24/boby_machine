<template>
  <section class="video">
    <div class="videoContainer">
      <div class="videoHeader">
        <van-button plain type="primary" class="btn">投放到设备</van-button>
        <van-button plain type="primary" class="btn">拍摄教程</van-button>
        <van-button
          type="info"
          class="btn"
          @click="$router.push('/video/addlibrary')"
          >添加库</van-button
        >
      </div>
      <div class="videoTabs">
        <van-tabs v-model="active" background="#F2F2F2" color="#007aff">
          <van-tab
            title="正常(3)"
            :title-style="{ 'font-size': '16px' }"
            class="normal"
          >
            <div><VideoCard /></div>
            <div><VideoCard /></div>
            <div><VideoCard /></div>
            <div><VideoCard /></div>
            <div><VideoCard /></div>
          </van-tab>
          <van-tab title="作废(0)" :title-style="{ 'font-size': '16px' }"
            >内容 4</van-tab
          >
        </van-tabs>
      </div>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
import { Tab, Tabs } from "vant";
import VideoCard from "../../components/VideoCard/VideoCard";
export default {
  components: {
    VideoCard,
    "van-tab": Tab,
    "van-tabs": Tabs,
  },
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style scoped lang="scss">
.video {
  width: 390px;
  background-color: #f2f2f2;
  .videoContainer {
    .videoHeader {
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
        &.active {
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
          content: "";
          display: block;
          width: 30px;
          height: 3px;
          border-radius: 4px;
          background-color: #007aff;
        }
      }
    }
    .videoTabs {
      margin-top: 20px;
      padding: 0 16px;
      padding-bottom: 68px;
      box-sizing: border-box;
      overflow: hidden;
      .normal {
        div {
          margin-top: 12px;
        }
      }
    }
  }
}
</style>
