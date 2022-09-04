<template>
  <div class="cart w">
    <div class="recommend clearfix">
      <MyGuessYouBuyTitle :title="title"></MyGuessYouBuyTitle>
      <MyGuessYouBuyBodyVue></MyGuessYouBuyBodyVue>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyGuessYouBuyTitle from './components/MyGuessYouBuyTitle.vue'
import MyGuessYouBuyBodyVue from './components/MyGuessYouBuyBody.vue'

defineProps<{
  title:string
}>()
</script>

<style lang="less" scoped>
.cart {
  position: relative;
  margin: 60px 0 0;
}
</style>
