<template>
  <div class="header_nav">
    <ul class="clearfix">
      <li class="category">
        <router-link to="/category" :class="showFlag ? 'category_hide' : ''"><span class="text">全部商品分类</span>
        </router-link>
        <MyTypeNavVue :showFlag="showFlag"></MyTypeNavVue>
      </li>
      <li class="nav-item nav-item-active" @mouseenter="item.show = !item.show" @mouseleave="item.show = !item.show"
        v-for="(item, index ) in store.navList" :key="index">
        <a href="javascript:;" class="nav-title">
          <span class="text">{{ item.navTitle }}</span>
          <teleport to='body'>
            <MyNavInfoVue :list="item.navChildren" :flag="item.show"></MyNavInfoVue>
          </teleport>
        </a>
      </li>
      <li class="nav-item nav-item-active">
        <router-link to=""><span class="text">服务中心</span></router-link>
      </li>
      <li class="nav-item nav-item-active">
        <router-link to=""><span class="text">社区</span></router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import MyTypeNavVue from '@/components/Home/MyTypeNav.vue'
import MyNavInfoVue from './MyNavInfo.vue'

import { ref, watch, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import { useHeaderStore } from '@/store/Home/Header/index'
const router = useRouter()
const currentRoute = router.currentRoute
const instance = getCurrentInstance()

let showFlag = ref<boolean>(false)
watch(() => currentRoute.value.path, (newPath) => {
  if (newPath === '/home') {
    showFlag.value = true
  } else {
    showFlag.value = false
  }
}, { immediate: true })

const store = useHeaderStore()

store.getHeaderNav()

// const show = (index: number): void => {
//   instance?.proxy?.$Bus.emit('changeNavInfoShowFlag', index)
// }

// const hide = (): void => {
//   console.log('hide')
// }

</script>

<style lang="less" scoped>
.header_nav {
  position: absolute;
  top: 0;
  left: 100px;
  width: 850px;
  height: 100px;

  ul {
    // position: relative;

    .category {
      position: relative;
      float: left;
      width: 131px;
      padding-right: 15px;

      a {
        display: block;
        height: 88px;
        padding: 10px 10px;
        line-height: 88px;
        color: #333;
        font-size: 16px;

        &:hover ::v-deep {
          color: #ff6700 !important;
        }
      }

      &:hover ::v-deep {

        .site-category-list {
          display: inline-block !important;
        }
      }
    }

    .nav-item {
      float: left;

      a,
      .nav-title {
        display: block;
        height: 88px;
        padding: 10px 10px;
        line-height: 88px;
        color: #333;
        font-size: 16px;

        &:hover {
          color: #ff6a00;
        }
      }

      .nav-info-up {
        display: none;
        height: 0;
      }

      .nav-info-down {
        display: block;
        height: 229px;
      }

      &:hover ::v-deep {
        .nav-info {
          display: block !important;
          height: 201px !important;
        }
      }
    }

    .category_hide {
      visibility: hidden;
    }
  }
}
</style>
