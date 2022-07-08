<template>
  <div class="detail-section detail-info">
    <div class="detail-header">商品及优惠券</div>
    <div class="goods-list">
      <div class="goods-item">
        <div class="item-desc good-img">
          <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1614755062.53172736.jpg?thumb=1&w=30&h=30"
            alt="">
        </div>
        <div class="item-desc good-name">
          <a href="#">
            <span class="text">米家随行便携榨汁杯 白色</span>
          </a>
        </div>
        <div class="item-desc price-box">
          <div class="item-desc good-price">99元 x 1</div>
          <div class="item-desc good-status"></div>
          <div class="item-desc good-total">99元</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
