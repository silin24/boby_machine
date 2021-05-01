<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <custom-upload :on-change="onChange" multiple :file-list="fileList" :action="action">
      <van-button type="primary">点击上传</van-button>
    </custom-upload>
  </div>
</template>

<script>
// @ is an alias to /src
import customUpload from '@/components/custom-upload/customUpload'
import { Button } from 'vant'
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    customUpload,
    [Button.name]: Button
  },
  data () {
    return {
      fileList: [],
      action: 'https://afternoon-dawn-09444.herokuapp.com/upload'
    }
  },
  methods: {
    onChange (file, fileList) {
      console.log('file', file, fileList);
    }
  }
}
</script>