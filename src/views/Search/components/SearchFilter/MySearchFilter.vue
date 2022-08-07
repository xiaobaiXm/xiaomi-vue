<template>
  <div class="search_filter">
    <div class="search_warp w">
      <div class="search_list">
        <ul :class="!labelFlag ? 'height' : ''" class="clearfix">
          <span class="label">分类:</span>
          <li v-for="item in store.keyword" :key="item.id" @click="updateKeyword(item.keyword)"><a href="javascript:;"
              :class="keyword === item.keyword ? 'active' : ''">{{ item.keyword }}</a></li>
          <span class="more_btn" @click="showLabel">更多<span class="iconfont"
              :class="labelFlag ? 'icon-downforward' : 'icon-upforward'"></span></span>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, inject, getCurrentInstance } from 'vue'

import { useSearchStore } from '@/store/Search'

const keyword = inject<Ref<string>>('keyword', ref(''))

const instance = getCurrentInstance()
const store = useSearchStore()
let labelFlag = ref<boolean>(false)

const showLabel = () => {
  labelFlag.value = !labelFlag.value
}

const updateKeyword = (keyword: string): void => {
  instance?.proxy?.$Bus.emit('changeSearchKeyword', keyword)
}
</script>

<style lang="less" scoped>
.search_filter {
  background-color: #fff;

  .search_warp {
    padding: 18px 0;

    .search_list {
      position: relative;

      ul {
        position: relative;
        overflow: hidden;
        padding: 0 64px 0 124px;

        .label {
          position: absolute;
          top: 0;
          left: 0;
          padding: 14px 0;
          color: #b0b0b0;
          font-size: 14px;
        }

        li {
          display: inline-block;
          text-overflow: ellipsis;
          overflow: hidden;
          font-size: 14px;
          width: 148px;
          padding: 14px 0;
          height: 48px;
          line-height: 20px;

          a {
            width: 148px;
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #424242;
          }

          .active {
            color: #ff6700 !important;
          }
        }

        .more_btn {
          position: absolute;
          top: 0;
          right: 0;
          padding: 14px 0;
          color: #757575;
          font-size: 14px;
          cursor: pointer;

          .iconfont {
            margin-left: 5px;
            color: #b0b0b0;
            font-size: 10px;
          }
        }
      }

      .height {
        height: 48px;
      }
    }
  }
}
</style>
