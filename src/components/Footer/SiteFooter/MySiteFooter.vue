<template>
  <div class="site_footer">
    <!-- header -->
    <MySieHeaderVue></MySieHeaderVue>
    <!-- body -->
    <MySiteBodyVue></MySiteBodyVue>
  </div>
</template>

<script setup lang="ts">
import MySieHeaderVue from './SiteHeader/MySieHeader.vue'
import MySiteBodyVue from './SiteBody/MySiteBody.vue'
</script>

<style lang="less" scoped>
.site_footer {
  height: 333px;
}
</style>
