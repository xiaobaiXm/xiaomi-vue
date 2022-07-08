<template>
  <div>
    <div class="xm_product_box">
      <div class="nav_bar">
        <div class="container w">
          <h2>Note 11 Pro系列</h2>
          <div class="con">
            <div class="left">
              <span>|</span>
              <a href="#">Note 10 Pro</a>
            </div>
            <div class="right">
              <a href="#">概述页</a>
              <a href="#">参数页</a>
              <a href="#">F码通道</a>
              <a href="#">咨询客服</a>
              <a href="#">用户评价</a>
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
.xm_product_box {
  position: relative;
  box-shadow: 0 5px 5px rgb(0 0 0 / 7%);
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  background-color: #fff;

  .nav_bar {
    position: relative;
    width: 100%;
    height: 63px;

    .container {
      h2 {
        margin: 0;
        float: left;
        line-height: 60px;
        color: #424242;
        font-size: 18px;
        font-weight: 400;
      }

      .con {

        .left {
          float: left;
          margin: 21px 0 0 5px;

          .span {
            margin: 0 6px;
          }

          a {
            color: #616161;
          }
        }

        .right {
          float: right;
          margin-top: 17px;

          a {
            color: #616161;
            font-size: 14px;

            &:nth-child(-n+4) {
              &::after {
                display: inline-block;
                content: "";
                width: 2px;
                height: 15px;
                margin: 0 7px 0;
                vertical-align: middle;
                background-color: #e0e0e0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
