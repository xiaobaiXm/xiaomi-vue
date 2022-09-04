<template>
  <div class="confirm-pay">
    <div class="section-payment">
      <div class="cash-title">
        <div>选择以下支付方式付款</div>
      </div>
      <div class="payment-box">
        <div class="payment-header clearfix">
          <h3 class="title">支付工具</h3>
          <span class="desc"></span>
        </div>
        <div class="payment-body">
          <ul class="clearfix">
            <li>
              <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/031f3af10e3856352b847fe480b2b2e5.png" alt="">
            </li>
            <li>
              <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4cdfb179cdce8f95c57e8d82c469d20c.png" alt="">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.confirm-pay {
  .section-payment {
    padding: 30px 48px;
    margin-bottom: 30px;
    background-color: #fff;
    color: #424242;

    .cash-title {
      height: 50px;
      margin-bottom: 30px;
      border-bottom: 1px solid #e0e0e0;
      font-size: 18px;
    }

    .payment-box {
      margin-bottom: 30px;

      .payment-header {
        margin-bottom: 15px;

        .title {
          float: left;
          font-size: 16px;
          color: #616161;
        }

        .desc {
          float: left;
          margin-left: 10px;
          margin-top: 6px;
          font-size: 12px;
          color: #b0b0b0;
        }
      }

      .payment-body {
        ul {
          margin: 0 0 0 -14px;

          li {
            float: left;
            width: 174px;
            height: 60px;
            line-height: 60px;
            margin-left: 14px;
            margin-bottom: 14px;
            border: 1px solid #e0e0e0;
            text-align: center;
            cursor: pointer;
            overflow: hidden;
            transition: all .4s;

            &:hover {
              border-color: #ff6700;
            }
          }

          .active {
            border-color: #ff6700;
          }
        }
      }
    }
  }
}
</style>
