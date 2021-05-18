<template>
  <div class="addCombo">
    <div class="up">
      <span>请配置你的地址，以便上门维护</span>
    </div>
    <div class="comboChoice">
      <ul>
        <li>
          <div class="item">
            <span>选项1</span>
            <div>
              <input type="number" value="2" />
              <span>元</span>
            </div>
            <div>
              <input type="number" value="1" />
              <span>次</span>
            </div>
          </div>
        </li>
        <li>
          <div class="item">
            <span>选项2</span>
            <div>
              <input type="number" placeholder="请输入" />
              <span>元</span>
            </div>
            <div>
              <input type="number" placeholder="请输入" />
              <span>次</span>
            </div>
          </div>
        </li>
        <li>
          <div class="item">
            <span>选项3</span>
            <div>
              <input type="number" placeholder="请输入" />
              <span>元</span>
            </div>
            <div>
              <input type="number" placeholder="请输入" />
              <span>次</span>
            </div>
          </div>
        </li>
        <li>
          <div class="item">
            <span>选项4</span>
            <div>
              <input type="number" placeholder="请输入" />
              <span>元</span>
            </div>
            <div>
              <input type="number" placeholder="请输入" />
              <span>次</span>
            </div>
          </div>
        </li>
        <li>
          <div class="item">
            <span>选项5</span>
            <div>
              <input type="number" placeholder="请输入" />
              <span>元</span>
            </div>
            <div>
              <input type="number" placeholder="请输入" />
              <span>次</span>
            </div>
          </div>
        </li>
      </ul>
      <div class="addComboItem" @click="addItem">
        <span>增加一个选项</span>
      </div>
    </div>
    <div class="isDefaultCombo">
      <span>是否为默认套餐</span>
      <van-switch v-model="checked" size="20px"/>
    </div>
    <div class="btn">
      <van-button  class="btnSave" @click="$router.back()">取消</van-button>
      <van-button  class="btnSubmit">添加</van-button>
    </div>
  </div>
</template>

<script>
import { Switch  } from "vant";

export default {
  components: {
    "van-switch": Switch,
  },
  data() {
    return {
      value: "",
      checked: true,
    };
  },
  methods: {
    addItem () {
      console.log('xxxxx');
    }
  },
};
</script>

<style lang="scss" scoped>
.addCombo {
  width: 390px;
  background-color: #f2f2f2;
  height: 100vh;
  .up {
    height: 44px;
    line-height: 44px;
    padding: 0 14px;
    box-sizing: border-box;
    color: rgba(16, 16, 16, 100);
    font-size: 14px;
    // background-color: #f2f2f2;
  }
  .comboChoice {
    background-color: #fff;
    color: rgba(3, 3, 3, 100);
    font-size: 18px;
    ul {
      li {
        .item {
          padding: 0 14px;
          box-sizing: border-box;
          padding-left: 15px;
          box-sizing: border-box;
          height: 45px;
          border-bottom: 1px solid rgba(3, 3, 3, 0.2);
          display: flex;
          align-items: center;
          justify-content: space-between;
          div {
            input {
              width: 60px;
              font-size: 16px;
              text-align: right;
              padding-right: 5px;
              opacity: 0.5;
              color: rgba(3, 3, 3, 100);
            }
          }
        }
      }
    }
    .addComboItem {
      background-color: #fff;
      height: 45px;
      line-height: 45px;
      text-align: center;
      color: rgba(57, 85, 246, 100);
      font-size: 18px;
    }
  }
  .isDefaultCombo {
    margin-top: 13px;
    height: 45px;
    background-color: #fff;
    color: rgba(3, 3, 3, 100);
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 14px;
  }
  .btn {
      position: fixed;
      left: 0;
      bottom: 0;
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
          color: #FFF;
        }
    }
}
</style>