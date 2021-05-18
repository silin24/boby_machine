<template>
  <div class="homeContainer">
    <div class="home">
      <section class="home-header">
        <div class="up">
          <van-icon name="scan" class="scan"/>
          <van-icon name="setting-o" class="setting" @click="toSetting"/>
        </div>
        <div class="middle">
          <div class="avator">
            <img src="../../common/imgs/18.png" alt="">
          </div>
          <div class="user-info">
            <span class="username">
              八拖三老火锅欢迎
            </span>
            <span>
              6台设备正常运行中
            </span>
          </div>
        </div>
        <div class="down">
          <ul class="down-info">
            <li>
              <span class="num">6</span>
              <span>设备</span>
            </li>
            <li>
              <span class="num">21900</span>
              <span>抓娃娃</span>
            </li>
            <li>
              <span class="num">2190</span>
              <span>用户</span>
            </li>
            <li>
              <span class="num">3185</span>
              <div>
                <span>余额</span>
                <span :style='{color:"rgba(255, 210, 7, 100)"}'>(提现)</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section class="home-content">
        <!-- 轮播图 -->
        <nav class="home-nav">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div>
                  <img src="../../common/imgs/nav.png" />
                </div>
              </div>
              <div class="swiper-slide" >
                <div>
                  <img src="../../common/imgs/2.png" />
                </div>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </nav>
        <div class="gap"></div>
        <!-- 推广数据 -->
        <PromotionData/>
        <div class="gap16"></div>
        <!-- 娃娃机收益 -->
        <BabyMachine/>
        <div class="gap16"></div>
        <!-- 广告收益 -->
        <AdIncome/>
        <div class="gap16"></div>
        <!-- 剩余推广点 -->
        <PromotionPoint/>
        <div class="twoBtn">
          <van-button  type="info" class="btn">采购设备</van-button>
          <van-button  type="danger" class="btn">联系客服</van-button>
        </div>
      </section>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from "swiper";
  import "swiper/css/swiper.min.css";
  import PromotionData from '../../components/Home/PromotionData/PromotionData'
  import BabyMachine from '../../components/Home/BabyMachine/BabyMachine'
  import AdIncome from '../../components/Home/AdIncome/AdIncome'
  import PromotionPoint from '../../components/Home/PromotionPoint/PromotionPoint'
  export default {
    components:{PromotionData,BabyMachine,AdIncome,PromotionPoint},
    mounted() {
      new Swiper(".swiper-container", {
          autoplay: true,
          loop: true,
          pagination: {
            el: ".swiper-pagination",
          },
      });
    },
    methods: {
      toSetting(){
        this.$router.push('/setting')
      }
    },
  }
</script>

<style scoped lang="scss">
.homeContainer {
  width: 390px;
  .home {
    .home-header{
      width: 390px;
      height: 215px;
      background-color:#6057ff;
      display: flex;
      flex-direction: column;
      .up {
        width: 390px;
        height: 54px;
        position: relative;
        .scan {
          left: 309px;
          top: 20px;
          font-size: 22px;
          color: rgba(255, 255, 255, 100);
        }
        .setting {
          left: 330px;
          top: 20px;
          font-size: 22px;
          color: rgba(255, 255, 255, 100);
        }
      }
      .middle {
        width: 390px;
        height: 55px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding-left: 18px;
        .avator img{
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background-color: pink;
        }
        .user-info {
          margin-left: 11px;
          display: flex;
          flex-direction: column;
          color: rgba(255, 255, 255, 0.7);
          font-size: 12px;
          .username {
            font-size: 16px;
            color: rgba(255, 255, 255, 100);
            margin-bottom: 8px;
          }
        }
      }
      .down {
        width: 390px;
        height: 106px;
        padding-top: 28px;
        box-sizing: border-box;
        .down-info{
          display: flex;
          justify-content: space-around;
          li {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            color: rgba(255, 255, 255, 0.7);
            .num {
              font-size: 16px;
              color: rgba(255, 255, 255, 1)
            }
          }
        }
      }
    }
    .home-content{
      box-sizing: border-box;
      width: 390px;
      height: 1091px;
      background-color: #F2F2F2;
      padding: 0 16px;
      position: relative;
      .home-nav{
      width: 358px;
      height: 112px;
      position: absolute;
      overflow: hidden;
      top: -18px;
      .swiper-wrapper{
        .swiper-slide{
          width: 358px;
          height: 112px;
          box-shadow: 10px 10px 5px rgba(0,0,0,.5);
          img {
            width: 358px;
            height: 112px;

          }
        }
      }
      /deep/.swiper-pagination {
        >span.swiper-pagination-bullet-active {
          background: black;
        }
      }
      }
      .gap {
        height: 109px;
      }
      .twoBtn {
        margin-top: 23px;
        display: flex;
        justify-content: space-between;
        .btn {
          width: 173px;
          height: 41px;
          border-radius: 20px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
