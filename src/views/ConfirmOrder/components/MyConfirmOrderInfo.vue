<template>
  <div class="confirm-order">
    <div class="section-order">
      <div class="order-info clearfix">
        <div class="fl clearfix">
          <h2 class="title">订单提交成功！去付款咯～</h2>
          <p class="order-time">
            <span>
              请在
              <span class="pay-time-tip">0 小时 29 分</span>
              <span>内完成支付, 超时后将取消订单</span>
            </span>
          </p>
          <p class="post-info" v-show="!detailFlag">收货信息：潘贵会 131****3587 广西 柳州市 鱼峰区 麒麟街道 柳州职业技术学院</p>
        </div>
        <div class="fr clearfix">
          <div class="total">
            应付总额：
            <span class="price">
              <em>99</em>
              <span>元</span>
            </span>
          </div>
          <a href="javascript:;" class="show-detail" @click="detailFlag = !detailFlag">
            订单详情 <span class="iconfont" :class="detailFlag ? 'icon-upforward' : 'icon-downforward'"></span>
          </a>
        </div>
      </div>
      <i class="icon-right">√</i>
      <div class="order-detail" :style="{ height: detailFlag ? '165px' : '0px' }">
        <ul>
          <li class="clearfix">
            <div class="label">订单号：</div>
            <div class="content">
              <span class="order-num">5220901845205835</span>
            </div>
          </li>
          <li class="clearfix">
            <div class="label">收货信息：</div>
            <div class="content">潘贵会 131****3587 广西 柳州市 鱼峰区 麒麟街道 柳州职业技术学院
            </div>
          </li>
          <li class="clearfix">
            <div class="label">商品名称：</div>
            <div class="content">
              <span>小米巨能写 黑色 10支装</span>
            </div>
          </li>
          <li class="clearfix">
            <div class="label">发票信息：</div>
            <div class="content">电子普通发票 个人
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let detailFlag = ref<boolean>(false)
</script>

<style lang="less" scoped>
.confirm-order {
  .section-order {
    position: relative;
    padding: 30px 48px 30px 183px;
    margin-bottom: 30px;
    background-color: #fff;
    color: #424242;

    .order-info {
      padding: 20px 0;

      .fl {
        float: left;

        .title {
          margin-bottom: 10px;
          font-size: 24px;
          font-weight: 400;
          line-height: 36px;
        }

        .order-time {
          color: #616161;
          margin-bottom: 5px;
          line-height: 2;

          .pay-time-tip {
            margin: 0 5px;
            color: #ff6700;
          }
        }

        .post-info {
          color: #616161;
          transition: height .3s ease;
        }
      }

      .fr {
        float: right;
        text-align: right;

        .total {
          margin-bottom: 10px;
          color: #757575;

          .price {
            color: #ff6700;
            font-size: 14px;

            em {
              font-style: normal;
              font-size: 24px;
            }
          }
        }

        .show-detail {
          color: #757575;
        }
      }
    }

    .icon-right {
      width: 80px;
      height: 80px;
      line-height: 80px;
      position: absolute;
      top: 40px;
      left: 50px;
      font-size: 80px;
      color: #83c44e;
      text-align: center;
      border: 2px solid #83c44e;
      border-radius: 42px;
      overflow: hidden;
      -webkit-font-smoothing: antialiased;
      -webkit-text-stroke-width: 0.2px;
    }

    .order-detail {
      height: 0;
      overflow: hidden;
      transition: height .3s;

      ul {
        padding: 20px 0 0 0;
        margin-top: 10px;
        border-top: 1px solid #e0e0e0;

        li {
          line-height: 24px;
          margin-bottom: 8px;
          color: #333;

          .label {
            float: left;
            width: 85px;
          }

          .content {
            float: left;

            .order-num {
              display: block;
              color: #ff6700;
            }
          }
        }
      }
    }
  }
}
</style>
