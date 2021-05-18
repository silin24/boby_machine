<template>
  <section class="loginContainer">
    <div class="loginHeader">
      <img src="../../common/imgs/26.png" alt="头像">
      <h2>欢迎使用小手一抖</h2>
    </div>
    <div class="loginContent">
      <form>
        <div class="phoneNum">
          <span>手机号码</span>
          <input type="number" placeholder="请输入手机号">
        </div>
        <div class="password">
          <span>密码</span>
          <input type="password" placeholder="请输入密码">
        </div>
      </form>
      <van-button type="info" class="loginBtn">登录</van-button>
      <span>忘记密码</span>
    </div>
    <div class="loginFooter">
      <img src="../../common/imgs/logo.png" alt="logo" class="logo">
      <div>
        <span>注册账号</span>
        <span>联系我们</span>
      </div>
    </div>

  </section>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="scss">
  .loginContainer {
    width: 390px;
    // height: 760px;
    background-color: #fff;
    padding:0 18px 0 23px;
    box-sizing: border-box;
    overflow: hidden;
    .loginHeader {
      height: 180px;
      position: relative;
      img {
        position: absolute;
        top: 48px;
        width: 62px;
        height: 62px;
        border-radius: 50%;
        background-color: pink;
      }
      h2 {
        font-size: 28px;
        color: rgba(0, 0, 0, 1);
        position: absolute;
        top: 135px;
        // text-align: left;
      }
    }
    .loginContent {
      margin: 30px 0 30px;
      box-sizing: border-box;
      height: 340px;
      display: flex;
      flex-direction: column;
      form {
        .phoneNum {
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          margin-bottom: 20px;
          span {
            color: rgba(64, 64, 64, 100);
            font-size: 14px;
            margin-bottom: 20px;
          }
          input {
            height: 40px;
            // width: 350px;
            // outline: none;
            color: rgba(191, 191, 191, 1);
            font-size: 18px;
            border-bottom: 1px solid rgba(64, 64, 64, 0.5);
            padding-left: 10px;
            box-sizing: border-box;
          }
  
        }
        .password {
          display: flex;
          flex-direction: column;
          span {
            color: rgba(64, 64, 64, 1);
            font-size: 14px;
            margin-bottom: 20px;
          }
          input {
            height: 40px;
            // width: 350px;
            padding-left: 10px;
            // text-indent: 10px;
            box-sizing: border-box;
            outline: none;
            color: rgba(191, 191, 191, 1);
            font-size: 18px;
            border-bottom: 1px solid rgba(64, 64, 64, 0.5);
          }
        }
      }
      .loginBtn {
        margin: 50px 0 15px;
        border-radius: 5px;
      }
      span {
        color: rgba(64, 64, 64, 100);
        font-size: 14px
      }
    }
    .loginFooter {
      // height: 240px;
      text-align: center;
      .logo {
        margin-bottom: 30px;
      }
      div {
        span {
          margin: 0 10px;
          color: rgba(145, 145, 145, 100);
          font-size: 14px;
        }
      }
    }
  }
</style>
