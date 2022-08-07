<template>
  <div class="empty-cart-bottom">
    <div class="cart-recommend">
      <div class="recommend-bd">
        <ul class="recommend-list">
          <li class="recommend-item">
            <a href="javascript:;">
              <img
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/45e49d5b5f78f11e9f99a9f95381235e.jpg?thumb=1&w=225&h=225&f=webp&q=90"
                alt="">
              <div class="title">小米手环6</div>
              <div class="price">229元</div>
              <div class="tips">70.9万人好评</div>
              <div class="recommend-action ">
                <a href="javascript:;" class="btn btn-small btn-line-primary" @click="joinCart">加入购物车</a>
              </div>
              <div class="recommend-notice" :class="flag === 0 ? 'joinCart' : ''">
                <a href="#" class="btn btn-green btn-block">成功加入购物车</a>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let flag = ref<number>(1)
// eslint-disable-next-line no-undef
let timer: null| NodeJS.Timeout = null

const joinCart = (): void => {
  flag.value = 0
  timer = setTimeout(() => {
    flag.value = 1
    clearInterval(Number(timer))
  }, 1500)
}

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

            .add_shopcar {
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
</style>
