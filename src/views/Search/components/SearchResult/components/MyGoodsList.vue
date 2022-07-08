<template>
  <div class="goods_list">
    <div class="goods_item">
      <a href="#" class="goods_info">
        <div class="figure_img">
          <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1595400926.0448806.jpg" alt="">
        </div>
        <h2 class="title">Redmi 9A 晴空蓝</h2>
        <p class="price"><span>599元</span><del class="old_price">1199元</del></p>
        <div class="thumbs">
          <ul>
            <li class="active"><img
                src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1595400896.0831679.jpg" alt="">
            </li>
            <li><img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1595400896.0831679.jpg" alt="">
            </li>
            <li><img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1595400896.0831679.jpg" alt="">
            </li>
          </ul>
        </div>
        <div class="flags">
          <span class="salel_label">
            <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/05c84c8d8ffebf7fd17c8838b5d81ee6.png"
              alt="">
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c02cd0743d6ded615afe101af6a8a918.png" alt="">
          </span>
        </div>
      </a>
    </div>

  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.goods_list {
  min-height: 480px;

  .goods_item {
    position: relative;
    float: left;
    width: 296px;
    height: 430px;
    margin: 0 27px 14px 0;
    text-align: center;
    background-color: #fff;
    transition: all .5s linear;

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

        .salel_label {
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
      box-shadow: 0 0 20px rgb(0 0 0 / 25%) !important;
      transform: translateY(-1px);

      .title {
        color: #ff6700;
      }
    }
  }
}
</style>
