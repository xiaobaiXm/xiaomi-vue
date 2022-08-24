<template>
  <div class="header_nav">
    <ul class="clearfix">
      <li class="category">
        <router-link to="/category" :class="showFlag ? 'category_hide' : ''"><span class="text">全部商品分类</span>
        </router-link>
        <MyTypeNavVue :showFlag="showFlag"></MyTypeNavVue>
      </li>
      <li class="nav-item nav-item-active" v-for="(item, index ) in store.navList" :key="index">
        <a href="javascript:;" class="nav-title">
          <span class="text">{{ item.navTitle }}</span>
        </a>
        <teleport to="body">
          <MyNavInfoVue :list="item"></MyNavInfoVue>
        </teleport>
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

import { ref, watch, computed, getCurrentInstance } from 'vue'
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

const show = computed(() => {
  return store.navList.filter(item => {
    return item.show === true
  })
})

</script>

<style lang="less" scoped>
.header_nav {
  position: absolute;
  top: 0;
  left: 100px;
  width: 850px;
  height: 100px;

  ul {
    position: relative;

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

          .site-category-list {
            display: block !important;
          }
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

          .nav-info {
            height: 229px;
          }
        }
      }

      .nav-info-active {
        box-shadow: 0 3px 4px rgb(0 0 0 / 18%);
        transition: box-shadow .3s, height .3s;
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
          display: block;
          height: 201px;
        }
      }
    }

    .nav-item-active {
      position: relative;
    }

    .category_hide {
      visibility: hidden;
    }
  }
}
</style>
