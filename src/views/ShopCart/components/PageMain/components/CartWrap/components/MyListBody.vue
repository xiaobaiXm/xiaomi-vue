<template>
  <div class="list-body">
    <div class="list-item">
      <div class="item-box">
        <div class="item-table">
          <div class="item-row clearfix">
            <div class="col col-check">
              <i class="iconfont icon-a-Frame3163 icon-checkbox"></i>
            </div>
            <div class="col col-img">
              <a href="#">
                <img
                  src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1618382698.96755128.jpg?thumb=1&w=100&h=100"
                  alt="">
              </a>
            </div>
            <div class="col col-name">
              <div class="tags"></div>
              <h3 class="name">
                <a href="javascript:;">定制不锈钢马克杯 白色</a>
              </h3>
            </div>
            <div class="col col-price">39元</div>
            <div class="col col-num">
              <div class="change-goods-num">
                <a href="javascript:;" class="red">
                  <span class="iconfont icon-jianhao"></span>
                </a>
                <input type="text" autocomplete="off" class="goods-num" value="1">
                <a href="javascript:;" class="add">
                  <span class="iconfont icon-jiahaocu"></span>
                </a>
              </div>
            </div>
            <div class="col col-total">39元</div>
            <div class="col col-action">
              <a href="javascript:;" class="del">
                <span class="iconfont icon-close"></span>
              </a>
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
.list-body {

  .list-item {

    .item-box {
      padding: 15px 26px 15px 0;
      border-top: 1px solid #e0e0e0;

      .item-table {
        display: table;
        border-collapse: collapse;
        border-spacing: 0;

        .item-row {
          display: table-row;
        }
      }
    }
  }
}
</style>
