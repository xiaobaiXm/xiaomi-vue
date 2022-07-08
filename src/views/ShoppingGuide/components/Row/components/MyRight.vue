<template>
  <div class="right">
    <div class="service-content">
      <div class="service-content-list">
        <div class="service-faq">
          <div class="service-faq-list">
            <span class="title select"> 在结算页无法使用优惠券？
              <span class="iconfont icon-downforward"></span>
            </span>
            <div class="con">
              <span>可能参加活动人数较多，建议刷新网页尝试；有的品类券不支持别的品类商品，所以也不能使用，具体详情可参照优惠券使用详情</span>
            </div>
          </div>
          <div class="service-faq-list">
            <span class="title"> 在结算页无法使用优惠券？
              <span class="iconfont icon-downforward"></span>
            </span>
            <div class="con">
              <span>可能参加活动人数较多，建议刷新网页尝试；有的品类券不支持别的品类商品，所以也不能使用，具体详情可参照优惠券使用详情</span>
            </div>
          </div>
          <div class="service-faq-list">
            <span class="title"> 在结算页无法使用优惠券？
              <span class="iconfont icon-downforward"></span>
            </span>
            <div class="con">
              <span>可能参加活动人数较多，建议刷新网页尝试；有的品类券不支持别的品类商品，所以也不能使用，具体详情可参照优惠券使用详情</span>
            </div>
          </div>
          <div class="service-faq-list">
            <span class="title"> 在结算页无法使用优惠券？
              <span class="iconfont icon-downforward"></span>
            </span>
            <div class="con">
              <span>可能参加活动人数较多，建议刷新网页尝试；有的品类券不支持别的品类商品，所以也不能使用，具体详情可参照优惠券使用详情</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.right {
  position: absolute;
  top: 0;
  right: 0;
  width: 978px;
  height: 335px;

  .service-content {
    padding-bottom: 50px;
    background-color: #fff;

    .service-content-list {
      .service-faq {
        .service-faq-list {
          .title {
            display: block;
            padding-left: 48px;
            line-height: 70px;
            box-sizing: border-box;
            color: #212121;
            font-size: 16px;
            cursor: pointer;
            border-bottom: 1px solid #e0e0e0;

            .iconfont {
              float: right;
              margin-right: 15px;
              font-size: 24px;
              font-weight: 400;
              color: #ccc;
            }

            &:hover {
              color: #ff6700;

              .iconfont {
                color: #ff6700;
              }
            }

          }

          .select {
            border: none;
          }

          .click {
            color: #ff6700;
          }

          .con {
            padding: 32px 48px;
            line-height: 24px;
            overflow: hidden;
            background-color: #fbfbfb;

            span {
              font-size: 16px;
              color: #333;
            }
          }
        }
      }
    }
  }
}
</style>
