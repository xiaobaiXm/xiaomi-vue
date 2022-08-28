<template>
  <div class="addonitems-tips">
    <div class="tip">还需 {{ store.difference }} 元可免运费</div>
    <a href="javascript:;" @click="flag= true">去凑单<span class="iconfont icon-youjiantou"></span> </a>
  </div>
  <teleport to='body'>
    <MyGatherSingle></MyGatherSingle>
  </teleport>
</template>

<script setup lang="ts">
import MyGatherSingle from '@/components/GatherSingle/MyGatherSingle.vue'

import { ref, provide } from 'vue'
import { useCartsStore } from '@/store/Carts'

const store = useCartsStore()
let flag = ref<boolean>(false)

provide('gatherSingleFlag', ref(flag))

</script>

<style lang="less" scoped>
.addonitems-tips {
  height: 20px;
  margin-bottom: 14px;
  line-height: 20px;
  text-align: right;
  color: rgba(0, 0, 0, .54);
  font-size: 14px;

  .tip {
    display: inline-block;
  }

  a {
    margin-left: 12px;
    color: rgba(0, 0, 0, .87);

    .iconfont {
      font-size: 12px;
    }

    &:hover {
      color: rgba(0, 0, 0, .87) !important;

    }
  }
}
</style>
