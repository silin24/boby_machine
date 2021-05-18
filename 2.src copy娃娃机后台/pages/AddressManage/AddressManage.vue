<template>
  <div class="addressManage">
    <div class="addressContainer">
      <div class="addresss">
        <div><AddressCard/></div>
        <div><AddressCard/></div>
        <div><AddressCard/></div>
        <div><AddressCard/></div>
        <div><AddressCard/></div>
      </div>
      <!-- <ul>
        <li>
          <AddressCard/>
        </li>
        <li>
          <AddressCard/>
        </li>
        <li>
          <AddressCard/>
        </li>
      </ul> -->
    </div>
    <div class="add" @click="$router.push('/device/addressManage/addAddress')">
      <van-icon name="plus" />
    </div>
  </div>
</template>

<script>
import AddressCard from '../../components/AddressCard/AddressCard'
  export default {
    components:{AddressCard}
  }
</script>

<style lang="scss" scoped>
  .addressManage {
    background-color: #f2f2f2;
    width: 390px;
    height: 100vh;
    .addressContainer {
      padding: 20px 16px;
      .addresss {
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
      background-color: #3955F6;
      text-align: center;
      line-height: 62px;
      font-size: 25px;
      color: #fff;
    }

  }
</style>