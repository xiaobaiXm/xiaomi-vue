<template>
  <div class="container">
    <!-- left -->
    <MyLeft></MyLeft>
    <!-- right -->
    <MyRight></MyRight>
  </div>
</template>

<script setup lang="ts">

import MyLeft from './components/MyLeft.vue'
import MyRight from './components/MyRight.vue'
</script>

<style scoped lang="less">
.container {
  display: flex;
}
</style>
