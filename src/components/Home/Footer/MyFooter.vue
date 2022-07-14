<template>
  <!-- 底部 start -->
  <footer class="footer w">
    <!-- site footer -->
    <MySiteFooterVue></MySiteFooterVue>
    <!-- site info -->
    <MySiteInfoVue></MySiteInfoVue>
  </footer>
  <!-- 底部 end -->
</template>

<script setup lang="ts">
import MySiteFooterVue from './SiteFooter/MySiteFooter.vue'
import MySiteInfoVue from './SiteInfo/MySiteInfo.vue'
</script>

<style scoped lang="less">
.footer {
  width: 1226px;
  height: 598px;
}
</style>
