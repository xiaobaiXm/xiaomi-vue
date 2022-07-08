<template>
  <div class="accept-terms">
    <div class="ant-checkbox-wrapper">
      <span class="ant-checkbox" @click="changeChecked">
        <input type="checkbox" class="ant-checkbox-input">
        <div class="ant-checkbox-inner" :class="checked? 'ant-checkbox-inner-active': ''">
          <span class="iconfont icon-a-Frame3163"></span>
        </div>
      </span>
      <span class="text">
        已阅读并同意小米帐号<a href="#">用户协议</a>和<a href="#">隐私协议</a>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { checked, changeChecked } from '@/hooks/User/Checked'
</script>

<style lang="less" scoped>
</style>
