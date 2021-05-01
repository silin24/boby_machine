<template>
  <div class="user">
    <div class="userHeader">
      <div :class="{active:isShowAll}" @click="isShowAll=true">
        <span>全部</span>
        <span>(3)</span>
      </div>
      <div :class="{active:!isShowAll}" @click="isShowAll=false">
        <span>有手机的</span>
        <span>(0)</span>
      </div>
    </div>
    <div class="userShow">
      <div class="allUser" :class="{on:isShowAll}">
        <ul>
          <li>
            <img src="../../common/imgs/18.png" alt="avator">
            <div>
              <div class="username">
                <span>孙悟空</span>
              </div>
              <div class="loginInfo">
                <div>
                  <van-icon name="phone-o" />
                  <span>18523356736</span>
                </div>
                <div>
                  <van-icon name="friends-o" />
                  <span>18523356736</span>
                </div>
              </div>
              <div class="playInfo">
                <div>
                  <span>抓娃娃</span>
                  <span>2次</span>
                </div>
                <div>
                  <span>发布视频</span>
                  <span>2次</span>
                </div>
                <span>明细</span>
              </div>
            </div>
          </li>
          <li>
            <img src="../../common/imgs/18.png" alt="avator">
            <div>
              <div class="username">
                <span>孙悟空</span>
              </div>
              <div class="loginInfo">
                <div>
                  <van-icon name="phone-o" />
                  <span>18523356736</span>
                </div>
                <div>
                  <van-icon name="friends-o" />
                  <span>18523356736</span>
                </div>
              </div>
              <div class="playInfo">
                <div>
                  <span>抓娃娃</span>
                  <span>2次</span>
                </div>
                <div>
                  <span>发布视频</span>
                  <span>2次</span>
                </div>
                <span>明细</span>
              </div>
            </div>
          </li>
          <li>
            <img src="../../common/imgs/18.png" alt="avator">
            <div>
              <div class="username">
                <span>孙悟空</span>
              </div>
              <div class="loginInfo">
                <div>
                  <van-icon name="phone-o" />
                  <span>18523356736</span>
                </div>
                <div>
                  <van-icon name="friends-o" />
                  <span>18523356736</span>
                </div>
              </div>
              <div class="playInfo">
                <div>
                  <span>抓娃娃</span>
                  <span>2次</span>
                </div>
                <div>
                  <span>发布视频</span>
                  <span>2次</span>
                </div>
                <span>明细</span>
              </div>
            </div>
          </li>
          <li>
            <img src="../../common/imgs/18.png" alt="avator">
            <div>
              <div class="username">
                <span>孙悟空</span>
              </div>
              <div class="loginInfo">
                <div>
                  <van-icon name="phone-o" />
                  <span>18523356736</span>
                </div>
                <div>
                  <van-icon name="friends-o" />
                  <span>18523356736</span>
                </div>
              </div>
              <div class="playInfo">
                <div>
                  <span>抓娃娃</span>
                  <span>2次</span>
                </div>
                <div>
                  <span>发布视频</span>
                  <span>2次</span>
                </div>
                <span>明细</span>
              </div>
            </div>
          </li>
          <li>
            <img src="../../common/imgs/18.png" alt="avator">
            <div>
              <div class="username">
                <span>孙悟空</span>
              </div>
              <div class="loginInfo">
                <div>
                  <van-icon name="phone-o" />
                  <span>18523356736</span>
                </div>
                <div>
                  <van-icon name="friends-o" />
                  <span>18523356736</span>
                </div>
              </div>
              <div class="playInfo">
                <div>
                  <span>抓娃娃</span>
                  <span>2次</span>
                </div>
                <div>
                  <span>发布视频</span>
                  <span>2次</span>
                </div>
                <span>明细</span>
              </div>
            </div>
          </li>
          <li>
            <img src="../../common/imgs/18.png" alt="avator">
            <div>
              <div class="username">
                <span>孙悟空</span>
              </div>
              <div class="loginInfo">
                <div>
                  <van-icon name="phone-o" />
                  <span>18523356736</span>
                </div>
                <div>
                  <van-icon name="friends-o" />
                  <span>18523356736</span>
                </div>
              </div>
              <div class="playInfo">
                <div>
                  <span>抓娃娃</span>
                  <span>2次</span>
                </div>
                <div>
                  <span>发布视频</span>
                  <span>2次</span>
                </div>
                <span>明细</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="phoneUser" :class="{on:!isShowAll}">
        <ul>
          <li>asffseg</li>
          <li>asfaseg</li>
          <li>asfafeg</li>
          <li>asfafsg</li>
          <li>asfafgf</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  data () {
    return {
      isShowAll:true
    }
  },
  mounted(){
    
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.user {
  width: 390px;
  box-sizing: border-box;
  padding: 0 17px;
  .userHeader {
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
      height: 4px;
      border-radius: 4px;
      background-color: blue;
    }

    }
  }
  .userShow {
    >div{
      display: none;
      &.on{
        display: block
      }
    }
    .allUser {
      ul {
        li {
          height: 110px;
          border-bottom: 1px solid rgba(227, 227, 227, 100);
          display: flex;
          align-items: center;
          // justify-content:space-around;
          img {
            width: 65px;
            height: 65px;
            border-radius: 50%;
            background-color: blue;
            margin-right: 10px;
          }
          div {
            >div {
              margin-top: 5px;
            }
            .username {
              color: rgba(16, 16, 16, 100);
              font-size: 18px;
            }
            .loginInfo{
              display: flex;
              justify-content: space-between;
              opacity: 0.7;
              color: rgba(57, 85, 246, 1);
              font-size: 14px;
              div {
                margin-right: 18px;
              }
            }
            .playInfo {
              display: flex;
              align-items: center;
              color: rgba(16, 16, 16, 100);
              font-size: 12px;
              >span {
                color: rgba(57, 85, 246, 100);
                font-size: 12px;
              }
              div {
                margin-right: 17px;
                span {
                  margin-right: 5px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>