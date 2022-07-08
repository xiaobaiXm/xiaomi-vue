<template>
  <div class="cart-header w">
    <!-- logo -->
    <MyHeaderLogoVue></MyHeaderLogoVue>
    <!-- title -->
    <MyHeaderTitleVue></MyHeaderTitleVue>
    <!-- top abr -->
    <MyTopBarVue></MyTopBarVue>
  </div>
</template>

<script setup lang="ts">
import MyHeaderLogoVue from './components/MyHeaderLogo.vue'
import MyHeaderTitleVue from './components/MyHeaderTitle.vue'
import MyTopBarVue from './components/MyTopBar.vue'
</script>

<style lang="less" scoped>
</style>
