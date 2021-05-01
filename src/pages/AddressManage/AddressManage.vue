<template>
  <div class="addressManage">
    <div class="addressContainer">
      <ul>
        <li>
          <AddressCard/>
        </li>
        <li>
          <AddressCard/>
        </li>
        <li>
          <AddressCard/>
        </li>
      </ul>
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
      ul {
        li {
          margin-bottom: 13px;
        }
      }
    }

  }
</style>