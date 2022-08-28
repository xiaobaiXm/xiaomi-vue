<template>
  <div class="detail-section detail-info">
    <div class="detail-header">商品及优惠券</div>
    <div class="goods-list">
      <div class="goods-item" v-for="item in store.orderProductInfo" :key="item.id">
        <div class="item-desc good-img">
          <img v-lazy="item.cart_sku_info.img" alt="">
        </div>
        <div class="item-desc good-name">
          <a href="javascript:;" @click="productDetail(item.cart_product_info.id)">
            <span class="text">{{ item.cart_product_info.name }} {{ item.cart_sku_info.version }}
              {{ item.cart_sku_info.color }}</span>
          </a>
        </div>
        <div class="item-desc price-box">
          <div class="item-desc good-price">{{ item.cart_sku_info.price }}元 x {{ item.number }}</div>
          <div class="item-desc good-status"></div>
          <div class="item-desc good-total">{{ item.cart_sku_info.price * item.number }}元</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserOrderStore } from '@/store/User/Order'
import { productDetail } from '@/hooks/Detail'

const store = useUserOrderStore()
</script>

<style lang="less" scoped>
.detail-info {
  .detail-header {
    line-height: 40px;
    color: #333;
    font-size: 18px;
  }

  .goods-list {
    padding: 5px 0;
    border-bottom: 1px solid #e0e0e0;

    .goods-item {
      position: relative;
      padding: 15px 0;

      .item-desc {
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: 1;
        color: #424242;
        vertical-align: middle;
      }

      .good-img {
        width: 30px;
        height: 30px;
        margin: 0 10px 0 0;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .good-name {
        width: 650px;

        a {
          .text {
            color: #424242;
          }
        }
      }

      .price-box {
        .good-price {
          width: 150px;
          text-align: center;
        }

        .good-status {
          width: 100px;
          text-align: center;
        }

        .good-total {
          width: 190px;
          text-align: right;
          color: #ff6701;
        }
      }
    }
  }
}
</style>
