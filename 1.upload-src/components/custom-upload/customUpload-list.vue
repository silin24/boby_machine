<template>
  <div class="go-upload-list">
    <div :class="['go-upload-list-item',file.status]" v-for="(file,i) in files" :key="file.uid">
      <!--  FIXME:code in here is so chaos, can it become more elegance?  -->
      <div class="go-upload-list-item-img">
        <!-- <van-icon v-if="file.status === 'pending'" class="go-upload-item-img-loading" name="loading"></van-icon> -->
        <van-loading v-if="file.status === 'pending'" />
        <template v-else-if="file.status === 'success'">
          <img v-if="isImage(file.type)" class="go-upload-list-item-img" :src="file.url" alt="">
          <van-icon v-else class="go-upload-item-file" name="video-o"></van-icon>
        </template>
        <van-icon v-else class="go-upload-item-img-error" name="warning-o"></van-icon>
      </div>
      <div class="go-upload-list-item-name">
        <span>{{ file.name }}</span>
        <van-progress v-if="file.status === 'pending'" :percentage="file.percent" />
        <!-- <my-progress v-if="file.status === 'pending'" :percent="file.percent"></my-progress> -->
      </div>
      <span class="go-upload-list-item-delete" @click="onDelete(file)">
          <van-icon name="delete-o"></van-icon>
        </span>
    </div>
  </div>
</template>

<script>
import { Progress, Icon, Loading } from 'vant';
export default {
  name: 'UploadList',
  props: {
    files: {
      type: Array,
      default: true
    }
  },
  components: {
    [Progress.name]: Progress,
    [Icon.name]: Icon,
    [Loading.name]: Loading
  },
  data () {
    return {};
  },
  methods: {
    isImage (type) {
      if (!type) {return;}
      return type.includes('image');
    },
    onDelete (file) {
      this.$emit('on-delete', file);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";
@import "../../assets/styles/vars.scss";
.go-upload-list {
  .go-upload-list-item {
    margin-top: 8px;
    padding: 8px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    border: 1px solid #d9d9d9;
  }
  .go-upload-list-item.failure {
    border: 1px solid $danger;
    color: $danger;
  }
  .go-upload-list-item.success {
    .go-upload-list-item-name {
      color: $primary;
    }
  }
  .go-upload-list-item-name {
    margin-left: 8px;
    flex: 1;
    @include ellipsis;
  }
  .go-upload-list-item-delete {
    cursor: pointer;
  }
  .go-upload-list-item-img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    & > img {
      width: 100%;
      height: 100%;
    }
  }
  .go-upload-item-img-loading {
    font-size: 20px;
    @include spinner;
  }
  .go-upload-item-error,
  .go-upload-item-file {
    font-size: 38px;
  }
}
</style>