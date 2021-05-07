<template>
  <div class="sceneCard">
    <div class="up"></div>
    <div class="middle">
      <div class="uploadLeft">
        <span>上传视频素材(可传多个)</span>
        <span class="videoForm">上传视频格式为.mp4的视频文件</span>
      </div>
      <div class="uploadRight">
        <van-uploader accept="image/*,video/mp4,audio/*" :after-read="afterRead" :before-read="beforeRead" class="upload" upload-icon='video'/>
        <van-icon name="arrow" class="arrow"/>
      </div>
    </div>
    <div class="down">
      <span>本场景展示时间</span>
      <div>
        <span>建议2-5秒</span>
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
      beforeRead(file,detail) {
        console.log('before');
        console.log(file);
        console.log(detail);
        return true
      },
      afterRead(file,detail) {
        // 此时可以自行将文件上传至服务器
        console.log('after');
        console.log(file);
        console.log(detail);

      },
    },
  }
</script>

<style lang="scss" scoped>
.sceneCard {
  width: 390px;
  padding: 0 15px;
  box-sizing: border-box;
  background-color: #fff;
  .up {
    height: 45px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.04);
  }
  .middle {
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
  .down {
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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