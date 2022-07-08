<template>
  <div class="address_box">
    <div class="product_address">
      <span class="iconfont icon-dizhi"></span>
      <div class="address_con">
        <div class="address">
          <span>北京</span>
          <span>北京市</span>
          <span>海淀区</span>
          <span>清河街道</span>
          <a href="#" class="modify">修改</a>
        </div>
        <div class="spot">
          <span>有现货</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.address_box {
  margin: 20px 0;

  .product_address {
    position: relative;
    width: 640px;
    height: 104px;
    background-color: #fafafa;
    border: 1px solid #e0e0e0;
    padding: 30px 50px;

    .iconfont {
      position: absolute;
      left: 20px;
      top: 26px;
      font-size: 20px;
      color: #999;
    }

    .address_con {
      .address {
        span {
          margin-right: 14px;
          color: #333;
          font-size: 14px;
        }

        .modify {
          color: #ff6700;
        }
      }

      .spot {
        span {
          color: #ff6700;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
