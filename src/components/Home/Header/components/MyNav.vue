<template>
  <div class="header_nav">
    <ul class="clearfix">
      <li class="category category-hide">
        <router-link to="/category"><span class="text">全部商品分类</span></router-link>
      </li>
      <li class="nav-item nav-item-active" v-for="(item, index ) in store.navList" :key="index">
        <a href="javascript:;" @mouseenter="item.show = !item.show" @mouseleave="item.show = !item.show">
          <span class="text">{{ item.navTitle }}</span>
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
  <teleport to="body">
    <div class="navBarInfo" :class="!show ? 'navInfoActive' : ''" :style="{ height: show ? '229px' : '0px',opacity: show ? '1' : '0' }">
      <div class="container w">
        <template  v-for="(v, index) in store.navList" :key="index" >
          <ul v-if="v.show">
            <li v-for="item in v.navChildren" :key="item.id">
              <a href="javascript:;" @click="productDetail(item.productId)">
                <div class="imgUrl">
                  <img v-lazy="item.img" alt="">
                </div>
                <div class="text">{{ item.name }}</div>
                <p class="price">{{ item.price }}</p>
              </a>
            </li>
          </ul>
        </template>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useHeaderStore } from '@/store/Home/Header/index'
const store = useHeaderStore()

store.getHeaderNav()

const productDetail = (productId: number | null): void => {
  console.log(productId)
}

let show = computed<boolean>((): boolean => {
  let flag = store.navList.filter(item => {
    return item.show === true
  })
  return flag.show
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

        &:hover {
          color: #333 !important;
        }
      }
    }

    .nav-item {
      float: left;

      a {
        display: block;
        height: 88px;
        padding: 10px 10px;
        line-height: 88px;
        color: #333;
        font-size: 16px;

        &:hover {
          color: #ff6a00;

          .navBarInfo {
            height: 229px;
          }
        }
      }
    }

    .nav-item-active {
      position: relative;
    }

    .category-hide {
      visibility: hidden;
    }
  }
}

.navInfoActive {
  box-shadow: 0 3px 4px rgb(0 0 0 / 18%);
}

.navBarInfo {
  position: absolute;
  top: 140px;
  width: 100%;
  margin: 0 0;
  border-top: 1px solid #e0e0e0;
  z-index: 9999;
  background-color: #fff;
  transition: box-shadow .3s, height .3s;

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
</style>
