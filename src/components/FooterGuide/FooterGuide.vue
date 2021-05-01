<template>
  <div class="footer-guide">
    <span class="guide-item" :class="{on: $route.path==='/home'}" @click="goto('/home')">
      <span>
        <van-icon name="star" />
      </span>
      <span>首页</span>
    </span>
    <span class="guide-item" :class="{on: $route.path==='/device'}" @click="goto('/device')">
      <span>
        <van-icon name="star" />
      </span>
      <span>设备</span>
    </span>
    <span class="guide-item" :class="{on: $route.path==='/video'}" @click="goto('/video')">
      <span>
        <van-icon name="star" />
      </span>
      <span>视频</span>
    </span>
    <span class="guide-item" :class="{on: $route.path==='/user'}" @click="goto('/user')">
      <span>
        <van-icon name="star" />
      </span>
      <span>用户</span>
    </span>
    <span class="guide-item" :class="{on: $route.path==='/detail'}" @click="goto('/detail')">
      <span>
        <van-icon name="star" />
      </span>
      <span>明细</span>
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'FooterGuide',
    

    methods: {
      goto (path) {
        // 编程式路由跳转
        path !== this.$route.path && this.$router.replace(path)
      }
    }
  }
</script>

<style scoped lang="scss">
  .footer-guide {
    position: relative;
    border: none;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 390px;
      height: 1px;
      background-color: #111;
      transform: scaleY(0.5);
    }
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    height: 56px;
    width: 390px;
    background: #fff;
    .guide-item {
      display: flex;
      flex-direction: column;
      text-align: center;
      width: 25%;
      // &.on
      //   color: $green
      span {
        margin-top: 5px;
        font-size: 12px;
        i {
          font-size: 22px;
        }
      }
    }
  }
</style>
