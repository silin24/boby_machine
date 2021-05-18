<template>
  <div class="comboManage">
    <div class="comboContainer">
      <div class="combo">
        <div>
          <div><ComboCard/></div>
          <div><ComboCard/></div>
          <div><ComboCard/></div>
          <div><ComboCard/></div>
          <div><ComboCard/></div>
        </div>
      </div>
    </div>
    <div class="add" @click="$router.push('/addCombo')">
      <van-icon name="plus" />
    </div>
  </div>
</template>

<script>
import ComboCard from "../../components/ComboCard/ComboCard";
export default {
  components: { ComboCard },

  };
</script>

<style lang="scss" scoped>
.comboManage {
  width: 390px;
  height: 100vh;
  background-color: #f2f2f2;
  .comboContainer {
    box-sizing: border-box;
    padding: 20px 16px 0 16px;
    .combo {
      height: calc(100vh - 120px);
      overflow: scroll;
      div {
        div {
          margin-bottom: 13px;
        }
      }
    }
  }
  .add {
    position: absolute;
    bottom: 30px;
    left: 30px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: #3955f6;
    text-align: center;
    line-height: 62px;
    font-size: 25px;
    color: #fff;
  }
}
</style>