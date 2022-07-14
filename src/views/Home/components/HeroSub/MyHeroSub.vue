<template>
  <div class="hero_container w">
    <!-- ChannelList -->
    <MyChannelListVue></MyChannelListVue>
    <!-- PromoList -->
    <MyPromoListVue></MyPromoListVue>
  </div>
</template>

<script setup lang="ts">
import MyChannelListVue from './components/MyChannelList.vue'
import MyPromoListVue from './components/MyPromoList.vue'
</script>

<style lang="less" scoped>
.hero_container {
  position: relative;
  height: 170px;
  margin-top: 14px;
}
</style>
