<template>
  <div class="search">
    <input type="text" :placeholder="keyword" v-model="keyword" :class="keywordFlag ? 'focus' : ''" @focus="keywordFlag = true"
      @focusout="keywordFlag = false">
    <a @click="submit(keyword)" href="javascript:;" class="submit" :class="keywordFlag ? 'focus' : ''"><span
        class="iconfont icon-sousuo1"></span></a>
    <div class="all_goods" v-if="keywordFlag && keyword == ''">
      <ul>
        <li v-for="item in store.homeSearchKeyword" :key="item.id">
        <a href="javascript:;" @click="submit(item.keyword)">{{ item.keyword }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { useSearchStore } from '@/store/search'

const router = useRouter()
const store = useSearchStore()

store.getSearchKeywordInfo()

const keyword = ref<string>('小米手机')
let keywordFlag = ref<boolean>(false)

const submit = (keyword: string): void => {
  const location = { name: 'Search', query: { keyword } }
  router.push(location)
}

</script>

<style lang="less" scoped>
.search {
  position: absolute;
  top: 25px;
  right: 0;
  width: 296px;
  height: 50px;

  input {
    width: 245px;
    height: 50px;
    padding-left: 10px;
    color: #666;
    border: 1px solid #e0e0e0;
    transition: all 0.4s;
    border-right: none;
  }

  .focus {
    border-color: #ff6700 !important;
  }

  .submit {
    display: block;
    float: right;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    transition: all 0.4s;

    .iconfont {
      font-size: 26px;
      color: #616161;
    }

    &:hover {
      background-color: #ff6700;
      border-color: #ff6700;

      .iconfont {
        color: #fff;
      }
    }
  }

  .all_goods {
    position: absolute;
    width: 247px;
    height: 250px;
    background-color: #fff;
    z-index: 99;
    border: 1px solid #ff6700;
    border-top: 0;
    box-sizing: border-box;

    ul {
      li {
        a {
          position: relative;
          display: block;
          padding: 6px 15px;
          font-size: 12px;
          color: #424242;

          &:hover {
            color: #424242 !important;
          }
        }

        &:hover {
          background-color: #f5f5f5;
        }
      }
    }
  }

  &:hover {

    input,
    .submit {
      border-color: #b0b0b0;
    }
  }
}
</style>
