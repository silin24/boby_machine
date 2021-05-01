<template>
  <div class="comboManage">
    <div class="comboContainer">
      <ul>
        <li>
      <ComboCard/>
        </li>
        <li>
      <ComboCard/>
        </li>
        <li>
      <ComboCard/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ComboCard from '../../components/ComboCard/ComboCard'
  export default {
    components:{ComboCard}
  }
</script>

<style lang="scss" scoped>
  .comboManage {
    width: 390px;
    height: 100vh;
    background-color: #f2f2f2;
    .comboContainer {
      box-sizing: border-box;
      padding: 20px 16px 0 16px;
      ul {
        li {
          margin-bottom: 13px;
        }
      }
    }
  }
</style>