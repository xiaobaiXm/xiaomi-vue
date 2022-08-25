<template>
  <div class="con_detail_info">
    <MyTitle></MyTitle>
    <div class="line"></div>
    <!-- <MyActivity></MyActivity> -->
    <MyAddressBox></MyAddressBox>
    <MyBuyOption></MyBuyOption>
    <MySelectList></MySelectList>
    <MyBtnBox></MyBtnBox>
    <MyAfterSaleInfoVue></MyAfterSaleInfoVue>
  </div>
</template>

<script setup lang="ts">
import MyTitle from './components/MyTitle.vue'
// import MyActivity from './components/MyActivity.vue'
import MyAddressBox from './components/MyAddressBox.vue'
import MyBuyOption from './components/MyBuyOption.vue'
import MySelectList from './components/MySelectList.vue'
import MyBtnBox from './components/MyBtnBox.vue'
import MyAfterSaleInfoVue from './components/MyAfterSaleInfo.vue'
</script>

<style lang="less" scoped>
.con_detail_info {
  flex: 1;
  margin-left: 20px;

  .line {
    margin-top: 12px;
    border-top: 1px solid #e0e0e0;
  }
}
</style>
