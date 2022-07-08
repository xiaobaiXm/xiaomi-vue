<template>
  <div class="con_detail_info">
    <MyTitle></MyTitle>
    <div class="line"></div>
    <!-- activity -->
    <MyActivity></MyActivity>
    <!-- address -->
    <MyAddressBox></MyAddressBox>
    <!-- buy option -->
    <MyBuyOption></MyBuyOption>
    <!-- select -->
    <MySelectList></MySelectList>
    <!-- btn -->
    <MyBtnBox></MyBtnBox>
    <!-- after -->
    <MyAfterSaleInfoVue></MyAfterSaleInfoVue>
  </div>
</template>

<script setup lang="ts">
import MyTitle from './components/Title/MyTitle.vue'
import MyActivity from './components/Activity/MyActivity.vue'
import MyAddressBox from './components/AddressBox/MyAddressBox.vue'
import MyBuyOption from './components/BuyOption/MyBuyOption.vue'
import MySelectList from './components/SelectList/MySelectList.vue'
import MyBtnBox from './components/BtnBox/MyBtnBox.vue'
import MyAfterSaleInfoVue from './components/AfterSaleInfo/MyAfterSaleInfo.vue'
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
