<template>
  <div class="selfSceneCard">
    <div class="no1"></div>
    <div class="no2">
      <span>场景名称</span>
      <div>
        <input type="text" placeholder="请输入场景名称">
        <van-icon name="arrow" class="arrow"/>
      </div>
    </div>
    <div class="no3">
      <div class="uploadLeft">
        <span>上传视频素材(可传多个)</span>
        <span class="videoForm">上传视频格式为.mp4的视频文件</span>
      </div>
      <div class="uploadRight">
        <van-uploader :after-read="afterRead" class="upload"/>
        <van-icon name="arrow" class="arrow"/>
      </div>
    </div>
    <div class="no4">
      <span>本场景展示时间</span>
      <div>
        <span>建议2-5秒</span>
        <van-icon name="arrow" class="arrow" />
      </div>
    </div>
    <div class="no5">
      <span>本场景展示排序</span>
      <div>
        <span>不填为随机</span>
        <van-icon name="arrow" class="arrow" />
      </div>
    </div>
  </div>
</template>

<script>
import { Uploader } from 'vant';
  export default {
    components:{
     'van-uploader': Uploader
    },
    methods: {
      afterRead(file) {
        // 此时可以自行将文件上传至服务器
        console.log(file);
      },
    },
  }
</script>

<style lang="scss" scoped>
  .selfSceneCard {
    width: 390px;
    padding: 0 15px;
    box-sizing: border-box;
    background-color: #fff;
    .no1 {
      height: 45px;
      border-bottom: 2px solid rgba(0, 0, 0, 0.04);
    }
    .no2 {
      height: 45px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid rgba(0, 0, 0, 0.04);
      >span {
        color: rgba(3, 3, 3, 100);
        font-size: 18px;
      }
      div {
        opacity: 0.3;
        color: rgba(3, 3, 3, 100);
        font-size: 18px;
        input {
          width: 133px;
          margin-right: 15px;
        }
      }
    }
    .no3 {
      height: 96px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid rgba(0, 0, 0, 0.04);

      .uploadLeft {
        display: flex;
        flex-direction: column;
        color: rgba(3, 3, 3, 100);
        font-size: 18px;
        .videoForm {
          margin-top: 6px;
          opacity: 0.7;
          color: rgba(3, 3, 3, 100);
          font-size: 12px;
        }
      }
      .uploadRight {
        .upload {
          margin-right: 15px;
        }
        .arrow {
          opacity: 0.3;
          color: rgba(3, 3, 3, 100);
          font-size: 18px;
        }
      }
    }
    .no4 {
      height: 45px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid rgba(0, 0, 0, 0.04);

      >span {
        color: rgba(3, 3, 3, 100);
        font-size: 18px;
      }
      div {
        opacity: 0.3;
        color: rgba(3, 3, 3, 100);
        font-size: 18px;
        span {
          margin-right: 15px;
        }
      }
    }
    .no5{
      height: 45px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid rgba(0, 0, 0, 0.04);

      >span {
        color: rgba(3, 3, 3, 100);
        font-size: 18px;
      }
      div {
        opacity: 0.3;
        color: rgba(3, 3, 3, 100);
        font-size: 18px;
        span {
          margin-right: 15px;
        }
      }
    }
  }
</style>