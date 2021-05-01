<template>
  <div class="addLibrary">
    <div class="addLibraryChange">
      <van-tabs v-model="active" background="#F2F2F2">
        <van-tab title="视频" :title-style="{'font-size':'16px'}">
          <!-- 片头场景 -->
          <h2 class="first">片头场景(选传)</h2>
          <SceneCard/>
          <!-- 片尾场景 -->
          <h2>片尾场景(选传)</h2>
          <SceneCard/>
          <!-- 自定义片段场景 -->
          <div class="selfUpload">
            <h2>自定义片段场景<span>(选传)</span></h2>
            <van-icon name="plus" class="plus"/>
          </div>
          <SelfSceneCard/>
          <div class="submit">
            <van-button  class="btnSave">保存</van-button>
            <van-button  class="btnSubmit">提交审核并使用</van-button>
          </div>
          <div class="cancel">
            <van-button  class="btnCancel">取消本次编辑</van-button>
          </div>
        </van-tab>
        <van-tab title="人声" :title-style="{'font-size':'16px'}">内容 2</van-tab>
        <van-tab title="音乐" :title-style="{'font-size':'16px'}">内容 3</van-tab>
        <van-tab title="标题" :title-style="{'font-size':'16px'}">内容 4</van-tab>
        <van-tab title="其他" :title-style="{'font-size':'16px'}">内容 4</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import SceneCard from '../../components/SceneCard/SceneCard'
import SelfSceneCard from '../../components/SelfSceneCard/SelfSceneCard'
import { Tab, Tabs } from 'vant';
  export default {
    components:{
      'van-tab':Tab,
      'van-tabs':Tabs,
      SceneCard,
      SelfSceneCard
    },
    data() {
    return {
      active: 0,
    };
  },
  }
</script>

<style lang="scss" scoped>
.addLibrary {
  width: 390px;
  // height: 1238px;
  background-color: #F2F2F2;
  .addLibraryChange {
    padding-top: 20px;
    box-sizing: border-box;
    .first {
      margin-top: 10px;
    }
    h2 {
      height: 50px;
      box-sizing: border-box;
      padding: 15px 0 15px 14px;
      color: rgba(16, 16, 16, 100);
      font-size: 14px;
    }
    .selfUpload {
      position: relative;
      .plus {
        position: absolute;
        bottom: 10px;
        right: 10px;
        color: rgba(0, 0, 0, 1);
        font-size: 24px;
      }

    }
    .submit {
      margin-top: 12px;
      .btnSave {
        width: 195px;
        height: 50px;
        background-color: #fff;
        color: rgba(57, 85, 246, 100);
        font-size: 18px;
      }
      .btnSubmit {
        width: 195px;
        height: 50px;
        background-color: #3955F6;
        font-size: 18px;
      }
    }
    .cancel {
      margin-top: 12px;
      .btnCancel {
        width: 390px;
        height: 50px;
        background-color: rgba(255, 255, 255, 100);
        color: rgba(255, 0, 0, 100);
        font-size: 18px;
      }
    }

  }
}
</style>