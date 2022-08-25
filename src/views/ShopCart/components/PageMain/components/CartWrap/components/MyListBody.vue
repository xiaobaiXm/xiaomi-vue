<template>
  <div class="list-body">
    <div class="list-item" v-for="(item, index) in store.cart" :key="index">
      <div class="item-box">
        <div class="item-table">
          <div class="item-row clearfix">
            <div class="col col-check">
              <i @click="update(item)" :class="item.selected ? 'check-active' : ''" class="iconfont icon-a-Frame3163 icon-checkbox"></i>
            </div>
            <div class="col col-img">
              <a href="#">
                <img v-lazy="item.cart_sku_info.img" alt="">
              </a>
            </div>
            <div class="col col-name">
              <div class="tags"></div>
              <h3 class="name">
                <a href="javascript:;">{{ item.cart_product_info.name }} {{ item.cart_sku_info.color }}</a>
              </h3>
            </div>
            <div class="col col-price">{{ item.cart_sku_info.price }}元</div>
            <div class="col col-num">
              <div class="change-goods-num">
                <a href="javascript:;" class="red">
                  <span class="iconfont icon-jianhao"></span>
                </a>
                <input type="text" autocomplete="off" class="goods-num" :value="item.number">
                <a href="javascript:;" class="add">
                  <span class="iconfont icon-jiahaocu"></span>
                </a>
              </div>
            </div>
            <div class="col col-total">{{ item.number * item.cart_sku_info.price }}元</div>
            <div class="col col-action">
              <a href="javascript:;" class="del">
                <span class="iconfont icon-close"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useCartsStore } from '@/store/Carts'
import { ICartInfo } from '@/store/Carts/Type/CartsAllInfo'

const store = useCartsStore()

const update = (item :ICartInfo):void => {
  console.log(item)
}
</script>

<style lang="less" scoped>
.list-body {

  .list-item {

    .item-box {
      padding: 15px 26px 15px 0;
      border-top: 1px solid #e0e0e0;

      .item-table {
        display: table;
        border-collapse: collapse;
        border-spacing: 0;

        .item-row {
          display: table-row;

          .check-active {
            color: #fff;
            border-color: #ff6700;
            background-color: #ff6700;
          }
        }
      }
    }
  }
}
</style>
