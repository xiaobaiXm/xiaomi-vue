<template>
  <div class="section">
    <div class="components_list_box">
      <div class="channel_line"></div>
    </div>
  </div>
  <div class="section">
    <div class="components_list_box">
      <div class="container w">
        <div class="row w">
          <div class="category">
            <div class="img">
              <a href="#">
                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/10018a0a678646e84525f3828536f3f9.jpg" alt="">
              </a>
            </div>
            <h3 class="title">Xiaomi 11 Ultra</h3>
            <p class="desc">1/1.12"GN22K四微曲屏</p>
            <p class="price">
              <strong>3999</strong>
              <span>元起</span>
              <del class="oldprice">4999元</del>
            </p>
          </div>
          <div class="category">
            <div class="img">
              <a href="#">
                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/10018a0a678646e84525f3828536f3f9.jpg" alt="">
              </a>
            </div>
            <h3 class="title">Xiaomi 11 Ultra</h3>
            <p class="desc">1/1.12"GN22K四微曲屏</p>
            <p class="price">
              <strong>3999</strong>
              <span>元起</span>
              <del class="oldprice">4999元</del>
            </p>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.section {
  .components_list_box {
    .channel_line {
      background-color: #f5f5f5;
      width: 100%;
      height: 14px;
    }

    .row {
      height: 100%;

      .category {
        position: relative;
        width: 606px;
        height: 482px;
        float: left;
        margin-left: 14px;

        .img {
          height: 358px;
          background-color: #f5f5f5;

          a {
            img {
              width: 606px;
              height: 358px;
            }
          }
        }

        .title {
          margin: 38px 0 0 48px;
          font-weight: 400;
          font-size: 24px;
        }

        .desc {
          line-height: 18px;
          margin: 3px 0 0 48px;
          color: rgba(51, 51, 51, .7);
          font-size: 14px;
        }

        .price {
          line-height: 30px;
          color: #ff6700;
          font-size: 12px;
          font-weight: 700;
          position: absolute;
          right: 48px;
          bottom: 30px;
          margin: 0;
          text-align: left;

          strong {
            font-weight: 400;
            font-size: 30px;
          }

          span {
            line-height: 30px;
            color: #ff6700;
            font-size: 12px;
            font-weight: 700;
            text-align: left;
          }

          .oldprice {
            color: rgba(51, 51, 51, .6);
            line-height: 30px;
            font-size: 12px;
            font-weight: 700;
          }
        }
      }
    }
  }
}
</style>
