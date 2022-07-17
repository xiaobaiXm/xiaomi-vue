<template>
  <router-link to="/cart" :class="cart > 0 ? 'not_empty ' : ''">
    <em class="iconfont" :class="cart < 0 ? 'icon-gouwuchekong' : 'icon-gouwucheman'"></em>
    <em>购物车</em>
    <span> (0)</span>
  </router-link>
  <div class="cart_info" v-if="cart <= 0">
    <div class="message">
      购物车中还没有商品，赶紧选购吧！
    </div>
  </div>
  <div class="cart-menu" style="height: 0;">
    <div class="menu-content">
      <ul class="cart-list" style="overflow: hidden scroll; max-height: 445.5px;">
        <li>
          <div class="cart-item clearfix">
            <a href="#" class="thumb">
              <img
                src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1614755062.53172736.jpg?width=60&height=60"
                alt="">
            </a>
            <a href="#" class="name">米家随行便携榨汁杯 白色</a>
            <span class="price">99元 × 1</span>
            <a href="javascript:;" class="btn-del">
              <span class="iconfont icon-close"></span>
            </a>
          </div>
        </li>
      </ul>
      <div class="cart-total clearfix">
        <span class="total">
          共 <em>2</em> 件商品
          <span class="price"><em>111</em>元
          </span>
        </span>
        <a href="#" class="btn btn-primary btn-cart">去购物车结算</a>
      </div>
      <div class="message hide">
        购物车中还没有商品，赶紧选购吧！
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let cartFlag = ref<boolean>(false)

let cart = ref<number>(222)
</script>

<style lang="less" scoped>

  a {
    display: block;
    width: 120px;
    height: 40px;
    margin-left: 15px;
    text-align: center;
    background-color: #424242;
    transition: all .5s;

    .iconfont {
      font-size: 18px;
      ;
    }

    &:hover {
      background-color: #fff;

      .cart_info {
        display: block !important;
      }
    }
  }

  .not_empty {
    background-color: #ff6700 !important;
    color: #fff !important;

    &:hover {
      color: #ff6700 !important;
      background-color: #fff !important;
    }
  }

  .cart_info {
    display: none;
    position: absolute;
    top: 40px;
    left: -181px;
    width: 316px;
    height: 100px;
    padding: 20px 0 0;
    background-color: #fff;
    z-index: 99;
    transition: height .3s;
    box-shadow: 0 2px 10px rgb(0 0 0 / 15%);

    .message {
      padding: 20px 0;
      margin: 0 20px 20px;
      text-align: center;
      color: #424242;
    }
  }

.shop_car {
  .cart-menu {
    display: none;
    position: absolute;
    right: 0;
    top: 40px;
    z-index: 2;
    width: 316px;
    color: #424242;
    background: #fff;
    box-shadow: 0 2px 10px rgb(0 0 0 / 15%);
    overflow: hidden;
    transition: height .3s;

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
              float: left;
              width: 95px;
              height: 40px;
              line-height: 20px;
              margin: 10px 0;
              color: #424242;
              overflow: hidden;
            }

            .price {
              float: right;
              margin: 20px 20px 0 5px;
            }

            .btn-del {
              position: absolute;
              top: 20px;
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

      .message {
        padding: 20px 0;
        margin: 0 20px 20px;
        text-align: center;
        color: #424242;
      }

    }
  }
}
</style>
