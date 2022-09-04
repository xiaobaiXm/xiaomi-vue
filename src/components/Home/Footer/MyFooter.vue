<template>
  <footer class="footer w">
    <MySiteFooterVue></MySiteFooterVue>
    <MySiteInfoVue></MySiteInfoVue>
  </footer>
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
