<template>
  <div class="header_nav">
    <ul class="clearfix">
      <li class="category">
        <router-link to="/category" :class="showFlag ? 'category_hide' : ''"><span class="text">全部商品分类</span>
        </router-link>
        <MyTypeNavVue></MyTypeNavVue>
      </li>
      <li class="nav-item nav-item-active" v-for="(item, index ) in store.navList" :key="index">
        <a href="javascript:;" class="nav-title">
          <span class="text">{{ item.navTitle }}</span>
        </a>
        <div class="nav-info">
          <div class="container">
            <ul>
              <li>
                <a href="javascript:;" @click="productDetail(1)">
                  <div class="imgUrl">
                    <!-- <img v-lazy="item.img" alt=""> -->
                  </div>
                  <!-- <div class="text">{{ item.name }}</div> -->
                  <!-- <p class="price">{{ item.price }}</p> -->
                </a>
              </li>
            </ul>
          </div>
        </div>
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

import { ref, computed, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import { useHeaderStore } from '@/store/Home/Header/index'
const router = useRouter()
const currentRoute = router.currentRoute
const instance = getCurrentInstance()

let showFlag = ref<boolean>()

if (currentRoute.value.path === '/home') {
  showFlag.value = true
} else {
  showFlag.value = false
}

const store = useHeaderStore()

store.getHeaderNav()

const productDetail = (productId: number | null): void => {
  console.log(productId)
}

const show = computed(() => {
  return store.navList.filter(item => {
    return item.show === true
  })
})

const categoryFlagChange = (flag: boolean) => {
  instance?.proxy?.$Bus.emit('categoryFlagChange', flag)
}

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

        &:hover {
          color: #333 !important;

          ::v-deep .type_nav {
            display: block;
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

      .nav-info {
        width: 100%;
        // height: 229px;
        // height: 0;
        background-color: #fff;
        border-top: 1px solid #e0e0e0;
        box-shadow: 0 3px 4px rgba(0, 0, 0, .18);
        position: absolute;
        left: 0;
        top: 100px;
        display: none;
        z-index: 300;
        transition: all .3s;

        .container {
          ul {
            li {
              width: 204px;
              height: 201px;
              padding: 35px 12px 0;
              float: left;
              text-align: center;

              a {
                float: left;
                width: 180px;
                height: 166px;

                .imgUrl {
                  width: 160px;
                  height: 110px;
                  margin: 0 auto 16px;

                  img {
                    width: 100%;
                    height: 100%;
                  }
                }

                .text {
                  width: 180px;
                  height: 20px;
                  color: #333;
                }

                p {
                  height: 20px;
                  color: #ff6700;
                }
              }

              &::after {
                content: '';
                display: block;
                width: 1px;
                height: 100px;
                background-color: #e0e0e0;
              }

              &:nth-child(1) {
                &::after {
                  content: none;
                }
              }
            }
          }
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
