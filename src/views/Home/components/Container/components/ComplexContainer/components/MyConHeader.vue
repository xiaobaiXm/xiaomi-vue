<template>
  <div class="con_header">
    <h2>{{ title }}</h2>
    <div class="more">
      <ul class="tab_lists">
        <li v-for="( item, index ) in list" :key="index" :class="flag === index ? 'tab_active' : ''"
          @mouseenter="flagChange(index)">{{ item.groupTitle }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, inject } from 'vue'
import { IContainerChildRight } from '@/model/Container'

const flag = inject<Ref<number>>('containerFlag', ref(0))

defineProps<{
  list: IContainerChildRight
    title: string,
  }>()

const flagChange = (newIndex: number): void => {
  flag.value = newIndex
}

</script>

<style lang="less" scoped>
  .con_header {
  height: 58px;

  h2 {
    line-height: 58px;
    font-size: 22px;
    font-weight: 200;
    color: #333;
  }

  .more {
    position: absolute;
    top: 0;
    right: 10px;

    .tab_lists {
      li {
        float: left;
        padding-top: 16px;
        margin-left: 30px;
        font-size: 16px;
        cursor: pointer;
        transition: all .2s;
      }

      .tab_active {
        color: #ff6700;
        border-bottom: 2px solid #ff6700
      }
    }
  }
}

</style>
