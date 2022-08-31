<template>
  <div class="cart-menu">
    <div class="menu-content">
      <ul class="cart-list" style="overflow: hidden scroll; max-height: 445.5px;">
        <li v-for="item in cart.list" :key="item.id">
          <div class="cart-item clearfix">
            <a href="javascript" class="thumb" @click="productDetail(item.cart_product_info.id)">
              <img v-lazy="item.cart_sku_info.img" alt="">
            </a>
            <a href="javascript:;" class="name" @click="productDetail(item.cart_product_info.id)">{{
                item.cart_product_info.name
            }} {{ item.cart_sku_info.version }} {{ item.cart_sku_info.color }}</a>
            <span class="price">{{ item.cart_sku_info.price }}元 × {{ item.number }}</span>
            <a href="javascript:;" class="btn-del" @click="removeCart(item.id)">
              <span class="iconfont icon-close"></span>
            </a>
          </div>
        </li>
      </ul>
      <div class="cart-total clearfix">
        <span class="total">
          共 <em>{{ store.allCount }}</em> 件商品
          <span class="price"><em>{{ store.totalPrice }}</em>元
          </span>
        </span>
        <router-link to="/cart" class="btn btn-primary btn-cart">去购物车结算</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useCartsStore } from '@/store/Carts'
import { productDetail } from '@/hooks/Detail/index'
import { ICartInfo } from '@/model/CartsAllInfo'
import { auth } from '@/hooks/User/auth'
const store = useCartsStore()
const cart = defineProps<{
  list: ICartInfo[],
  count: number
}>()

const removeCart = (id: number): void => {
  store.removeUserShopCartInfo([id])
}

onMounted(() => {
  if (auth()) {
    store.getAllUserShopCartInfo()
  }
})
</script>

<style lang="less" scoped>
.cart-menu {
  position: absolute;
  right: 0;
  top: 40px;
  z-index: 33;
  width: 316px;
  height: 0;
  color: #424242;
  background: #fff;
  box-shadow: 0 2px 10px rgb(0 0 0 / 15%);
  overflow: hidden;
  transition: all .3s;

  .menu-content {
    padding: 20px 0 0;

    .cart-list {
      li {
        position: relative;
        height: 80px;
        padding: 0 20px;

        .cart-item {
          position: relative;
          height: 60px;
          padding: 10px 0;
          border-top: 1px solid #e0e0e0;
          line-height: 20px;

          .thumb {
            float: left;
            margin-right: 10px;

            img {
              width: 60px;
              height: 60px;
            }
          }

          .name {
            display: inline-block;
            width: 95px;
            height: 40px;
            line-height: 20px;
            margin: 10px 0;
            color: #424242;
            font-size: 12px;
            overflow: hidden;
          }

          .price {
            float: right;
            margin: 20px 20px 0 5px;
            font-size: 12px;
          }

          .btn-del {
            position: absolute;
            top: 29px;
            right: 0;
            font-size: 16px;
            opacity: 0;
            transition: all .2s;

            .iconfont {
              font-size: 10px;
              font-weight: 600;
              transition: all .2s;

              &:hover {
                color: #424242;

                .btn-del {
                  opacity: 1;
                }
              }
            }

            &:hover {
              color: #b0b0b0 !important;
            }
          }
        }

        &:hover {
          .btn-del {
            opacity: .7;
          }
        }

        &:first-child .cart-item {
          border-top: 0;
        }
      }
    }

    .cart-total {
      padding: 15px 20px;
      background: #fafafa;
      line-height: 18px;

      .total {
        float: left;
        width: 135px;
        color: #757575;

        .price {
          display: block;
          font-weight: 400;
          color: #ff6700;

          em {
            font-size: 24px;
            line-height: 1;
          }
        }
      }

      .btn {
        display: inline-block;
        width: 158px;
        height: 38px;
        padding: 0;
        margin: 0;
        border: 1px solid #b0b0b0;
        font-size: 14px;
        line-height: 38px;
        text-align: center;
        color: #b0b0b0;
        cursor: pointer;
        transition: all .4s;
      }

      .btn-primary {
        background: #ff6700;
        border-color: #ff6700;
        color: #fff;
      }

      .btn-cart {
        float: right;
        width: 130px;
        padding: 0;
        font-size: 14px;
        line-height: 40px;
        text-align: center;
        color: #f5f5f5;
        background: #ff6700;
      }

      a:hover {
        color: #fff !important;
      }
    }
  }
}
</style>
