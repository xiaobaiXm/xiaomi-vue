<template>
  <div class="list-body">
    <div class="list-item" v-for="(item, index) in store.cart" :key="index">
      <div class="item-box">
        <div class="item-table">
          <div class="item-row clearfix">
            <div class="col col-check">
              <i @click="updateSelected(item)" :class="item.selected ? 'check-active' : ''"
                class="iconfont icon-a-Frame3163 icon-checkbox"></i>
            </div>
            <div class="col col-img">
              <a href="javascript:;" @click="productDetail(item.cart_product_info.id)">
                <img v-lazy="item.cart_sku_info.img" alt="">
              </a>
            </div>
            <div class="col col-name">
              <div class="tags"></div>
              <h3 class="name">
                <a href="javascript:;" @click="productDetail(item.cart_product_info.id)">{{ item.cart_product_info.name
                }} {{ item.cart_sku_info.version }} {{ item.cart_sku_info.color }}</a>
              </h3>
            </div>
            <div class="col col-price">{{ item.cart_sku_info.price }}元</div>
            <div class="col col-num">
              <div class="change-goods-num">
                <a href="javascript:;" class="red" @click="update('mins', -1, item)">
                  <span class="iconfont icon-jianhao"></span>
                </a>
                <input type="text" autocomplete="off" class="goods-num" :value="item.number"
                  @change="update('change', $event?.target?.value * 1, item)">
                <a href="javascript:;" class="add" @click="update('plus', 1, item)">
                  <span class="iconfont icon-jiahaocu"></span>
                </a>
                <div class="buy-limit" v-if="item.number > 1 && item.number < 10">
                  <div class="msg">还可以买{{ 10 - item.number }}件</div>
                </div>
              </div>
            </div>
            <div class="col col-total">{{ item.number * item.cart_sku_info.price }}元</div>
            <div class="col col-action">
              <a href="javascript:;" class="del" @click="remove(item)">
                <span class="iconfont icon-close"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <teleport to='body'>
    <MyMessageBox v-if="error.flag" :msg="error.msg" @shutMsg="shutMsg"></MyMessageBox>
  </teleport>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useCartsStore } from '@/store/Carts'

import { ICartInfo } from '@/model/CartsAllInfo'

const store = useCartsStore()

type IError = {
  flag: boolean
  msg:string
}

let error = reactive<IError>({
  flag: false,
  msg: ''
})

const shutMsg = ():void => {
  error.flag = false
}

const productDetail = (productId: number): void => {
  console.log(productId)
}

const update = (type: string, num: number, item: ICartInfo) => {
  let number = 0
  switch (type) {
    case 'mins':
      number = item.number > 1 ? item.number - 1 : item.number
      break
    case 'plus':
      if (item.number >= 10) {
        error.flag = true
        error.msg = '添加购物车数量限制'
        return
      } else {
        number = item.number + 1
      }
      break
    case 'change':
      if (isNaN(num) || num < 1) {
        number = 1
      } else if (isNaN(num) || num > 10) {
        error.flag = true
        error.msg = '添加购物车数量限制'
        store.getAllUserShopCartInfo()
        return
      } else {
        number = parseInt(num.toString())
      }
      break
  }
  try {
    store.updateUserCartInfo(item.id, { number })
  } catch (err) {

  }
}

const updateSelected = (item: ICartInfo): void => {
  const selected = !item.selected
  try {
    store.updateUserCartInfo(item.id, { selected })
  } catch (err) {
    alert(err)
  }
}

// 想删除多个可以自己写一个按钮 删除参数列表是一个数组
const remove = (item: ICartInfo): void => {
  try {
    store.removeUserShopCartInfo([item.id])
  } catch (err) {

  }
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
