<template>
  <div class="search">
    <input type="search" :placeholder="searchKeyword" v-model="searchKeyword" :class="keywordFlag ? 'focus' : ''"
      @focus="keywordFlag = true" @focusout="keywordFlag = false">
    <a @click="test" href="javascript:;" class="submit" :class="keywordFlag ? 'focus' : ''"><span
        class="iconfont icon-sousuo1"></span></a>
    <div class="all_goods" v-if="keywordFlag">
      <ul>
        <li v-for="item in store.homeSearchKeyword" :key="item.id"><a href="#">{{ item.keyword }}</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useSearchStore } from '@/store/Search'

const store = useSearchStore()

store.getSearchKeywordInfo()

let searchKeyword = ref<string>('手机')
let keywordFlag = ref<boolean>(false)

const test = () => {
  console.log(searchKeyword.value)
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

  // 搜索框获取焦点
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
        padding: 5px 10px;
        line-height: 20px;

        a {
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
