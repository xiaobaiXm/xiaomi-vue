<template>
  <div class="goods_list">
    <div class="goods_item" v-for="goods in store.searchProductInfo.list" :key="goods.productId">
      <a href="javascript:;" @click="product(goods.productId)" class="goods_info">
        <template v-for="item in goods.productInfo" :key="item.infoId">
          <div v-show="item.isCheck">
            <div class="figure_img">
              <img :src="item.img" alt="">
            </div>
            <h2 class="title">{{ goods.productName }} {{ item.version }}</h2>
            <p class="price"><span>{{ item.price }}元</span>
              <del class="old_price" v-if="item.oldPrice !== null || ''">
                {{ item.oldPrice }}元</del>
            </p>
          </div>
        </template>
        <div class="thumbs">
          <ul>
            <li @mouseenter="updateActive(goods.productInfo, item)" :class="item.isCheck ? 'active' : ''"
              v-for="item in goods.productInfo" :key="item.infoId">
              <img v-lazy="item.img" alt="">
            </li>
          </ul>
        </div>
        <div class="flags">
          <span class="sale_label">
            <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/05c84c8d8ffebf7fd17c8838b5d81ee6.png"
              alt="">
          </span>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useSearchStore } from '@/store/search'
import { IProductInfo } from '@/model/SearchProduct'
const router = useRouter()
const store = useSearchStore()

const product = (productId: number): void => {
  const location = { name: 'Detail', query: { productId } }
  router.push(location)
}

const updateActive = (productInfo: IProductInfo[], item: IProductInfo): void => {
  productInfo.forEach((items: IProductInfo) => {
    items.isCheck = false
  })
  item.isCheck = true
}
</script>

<style lang="less" scoped>
.goods_list {
  min-height: 440px;

  .goods_item {
    position: relative;
    float: left;
    width: 296px;
    height: 430px;
    margin: 0 27px 14px 0;
    text-align: center;
    background-color: #fff;
    transition: box-shadow .5s linear;

    .goods_info {
      display: block;
      height: 100%;
      padding: 47px 0 0 0;
      box-sizing: border-box;

      .figure_img {
        width: 200px;
        height: 200px;
        margin: 0 auto 16px;

        img {
          width: 200px;
          height: 200px;
        }
      }

      .title {
        width: 230px;
        margin: 0 auto;
        color: #757575;
        font-size: 14px;
        font-weight: 400;
      }

      .price {
        margin: 0 0 15px 0;
        color: #ff6700;
        font-size: 14px;

        .old_price {
          margin-left: 5px;
          color: #b0b0b0;
        }
      }

      .thumbs {
        width: 100%;
        height: 37px;
        overflow: hidden;

        ul {
          li {
            display: inline-block;
            width: 34px;
            height: 34px;
            margin: 0 4px;
            cursor: pointer;
            border: 1px solid #e0e0e0;
            transition: all .2s linear;

            img {
              width: 100%;
              height: 100%;
            }
          }

          .active {
            border-color: #ff6700;
          }
        }
      }

      .flags {
        position: absolute;
        bottom: 35px;
        left: 0;
        width: 100%;
        min-height: 18px;
        text-align: center;

        .sale_label {
          margin: 0 2px;

          img {
            margin: 0 4px 0 0;
            aspect-ratio: auto 42 / 18;
            height: 18px;
          }
        }
      }
    }

    &:nth-child(4n) {
      margin-right: 0;
    }

    &:hover {
      box-shadow: 0 0 10px rgb(0 0 0 / 25%) !important;

      .title {
        color: #ff6700;
      }
    }
  }
}
</style>
