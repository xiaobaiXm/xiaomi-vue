<template>
  <div class="page_nav">
    <span v-if="pageNo == 1" class="numbers first iconfont icon-xiangzuojiantou"></span>
    <a v-else href="javascript:;" @click="updateData( page.pageNo - 1)"
      class="numbers first iconfont icon-xiangzuojiantou"></a>
    <a href="javascript:;" class="numbers" v-if="startAndEndNum.start>=2"  @click="updateData(1)">1</a>
    <span class="numbers" v-if="startAndEndNum.start>=3">···</span>
    <a href="javascript:;" v-for="page in startAndEndNum.end" :key="page" class="numbers" :class="{current:pageNo == page}" @click="updateData(page)">{{ page }}</a>
    <span class="numbers" v-if="startAndEndNum.end < totalPage - 1">···</span>
    <a href="javascript:;" class="numbers" v-if="startAndEndNum.end < totalPage" @click="updateData(totalPage)">{{ totalPage }}</a>
    <span v-if="page.pageNo == totalPage" class="numbers last iconfont icon-xiangyoujiantou"></span>
    <a href="javascript:;" @click="updateData( page.pageNo + 1)" v-else
      class="numbers last iconfont icon-xiangyoujiantou"></a>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

let page = defineProps<{
  pageNo: number
  pageSize: number
  continues: number
  total: number
}>()

type IStartAndEndNum = {
  start: number
  end: number
}

const totalPage = computed((): number => {
  return Math.ceil(page.total / page.pageSize)
})

const startAndEndNum = computed((): IStartAndEndNum => {
  const { pageNo, continues } = page
  let start :number = pageNo - Number(continues / 2)
  let end: number = pageNo + Number(continues / 2)

  if (start < 1) {
    start = 1
    end = continues
  }

  if (end > totalPage.value) {
    end = totalPage.value
    start = totalPage.value - continues + 1
  }
  return { start, end }
})

const emit = defineEmits(['updateData'])

const updateData = (pageNo: number):void => {
  emit('updateData', pageNo)
}
</script>

<style lang="less" scoped>
.page_nav {
  padding: 15px 0;
  text-align: center;

  .numbers {
    display: inline-block;
    width: 48px;
    height: 30px;
    padding: 3px 0;
    margin: 0 5px;
    font-size: 18px;
    font-weight: 200;
    line-height: 24px;
    color: #b0b0b0;
    font-weight: 400;
    text-align: center;
    transition: all .2s linear;
    box-sizing: border-box;

    .iconfont {
      margin-top: -3px;
      margin-left: -1px;
      vertical-align: top;
      font-size: 24px;
    }
  }

  a {
    &:hover {
      background-color: #b0b0b0;
      color: #fff !important;

      .iconfont {
        color: #fff !important;
      }
    }
  }

  .current {
    background-color: #757575;
    color: #fff;
  }

  .active {
    background-color: #b0b0b0;
    color: #fff;
  }
}
</style>
