<template>
  <div class="empty-cart-bottom">
    <div class="cart-recommend">
      <div class="recommend-bd">
        <ul class="recommend-list">
          <li class="recommend-item" v-for="(item, index) in 10" :key="index">
            <a href="javascript:;">
              <img
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/45e49d5b5f78f11e9f99a9f95381235e.jpg?thumb=1&w=225&h=225&f=webp&q=90"
                alt="">
              <div class="title">小米手环6</div>
              <div class="price">229元</div>
              <div class="tips">70.9万人好评</div>
              <div class="recommend-action ">
                <a href="javascript:;" class="btn btn-small btn-line-primary" @click="joinCart(index)">加入购物车</a>
              </div>
              <div class="recommend-notice" :class="flag === index ? 'joinCart' : ''">
                <a href="javascript:;" class="btn btn-green btn-block">成功加入购物车</a>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { flag, joinCart } from '@/hooks/Guess'

</script>

<style lang="less" scoped>
.empty-cart-bottom {

  .cart-recommend {
    margin: 60px 0 0;

    .recommend_title {
      position: relative;
      height: 50px;
      margin: 0;
      font-size: 30px;
      font-weight: 400;
      color: #757575;
      border-top: 1px solid #e0e0e0;

      span {
        position: absolute;
        top: -20px;
        left: 372px;
        height: 40px;
        width: 482px;
        line-height: 40px;
        text-align: center;
        display: block;
        background-color: #f5f5f5;
      }
    }

    .recommend-bd {
      .recommend-list {
        .recommend-item {
          display: inline-block;
          width: 234px;
          height: 300px;
          padding: 0 20px;
          margin: 0 0 14px 16px;
          padding: 0;
          position: relative;
          overflow: hidden;
          list-style: none;
          background-color: #fff;
          text-align: center;

          a {
            text-align: center;
            font-size: 14px;

            img {
              display: block;
              margin: 40px auto 20px;
              width: 140px;
              height: 140px;
            }

            .title {
              height: 18px;
              margin: 0 10px 10px;
              color: #333;
            }

            .price {
              height: 18xp;
              margin: 0 0 10px 0;
              color: #ff6700;
            }

            .tips {
              position: relative;
              color: #757575;
            }

            .add_shop_car {
              position: absolute;
              bottom: -35px;
              left: 50%;
              transform: translateX(-50%);
              width: 155px;
              height: 32px;
              line-height: 30px;
              font-size: 12px;
              color: #ff6700;
              background-color: #fff;
              border: 1px solid #ff6700;
              transition: all .3s;
              z-index: -1;

              &:hover {
                color: #fff;
                background-color: #ff6700;
              }
            }

            .recommend-action {
              position: absolute;
              left: 0;
              bottom: 10px;
              width: 100%;
              opacity: 1;
              transform: translate3d(0, 200%, 0);
              transition: all .4s;
            }

            .recommend-notice {
              position: absolute;
              top: 0;
              left: 0;
              z-index: 5;
              width: 100%;
              opacity: 0;
              transform: translate3d(0, -10px, 0);
              transition: all .2s linear;

            }

            .joinCart {
              opacity: 1 !important;
              transform: none !important;
            }

            .recommend-action,
            .recommend-notice {

              .btn {
                display: inline-block;
                width: 158px;
                height: 38px;
                padding: 0;
                margin: 0;
                border: 1px solid #b0b0b0;
                font-size: 12px !important;
                line-height: 38px;
                text-align: center;
                color: #b0b0b0;
                cursor: pointer;
                transition: all .4s;
              }

              .btn-line-primary {
                border-color: #ff6700;
                background: #fff;
                color: #ff6700;

                &:hover {
                  color: #fff !important;
                  background-color: #ff6700;
                }
              }

              .btn-small {
                width: 118px;
                height: 28px;
                font-size: 12px;
                line-height: 28px;
              }

              .btn-green {
                background: #83c44e;
                border-color: #83c44e;
                color: #fff;

                &:hover {
                  color: #fff !important;
                }
              }

              .btn-block {
                display: block;
                width: 100%;
                padding-left: 0;
                padding-right: 0;
              }
            }

            &:hover {
              .recommend-action {
                transform: none !important;
              }
            }
          }

        }
      }
    }
  }
}
</style>
