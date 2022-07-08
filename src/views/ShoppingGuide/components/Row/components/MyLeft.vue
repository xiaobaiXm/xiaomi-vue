<template>
  <div class="left">
    <div class="page-front-menu">
      <div class="meau-box">
        <h3 class="title">购物指南</h3>
        <ul class="uc-nav-list">
          <li><a href="#" class="active">发货时效</a></li>
          <li><a href="#">发货时效</a></li>
          <li><a href="#">发货时效</a></li>
          <li><a href="#">发货时效</a></li>
          <li><a href="#">发货时效</a></li>
          <li><a href="#">发货时效</a></li>
          <li><a href="#">发货时效</a></li>
        </ul>
        <span class="line"></span>
        <ul class="uc-nav-list">
          <li><a href="#">联系客服</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.left {
  position: absolute;
  top: 0;
  left: 0;
  width: 234px;
  min-height: 1px;
  background-color: #fff;

  .page-front-menu {
    padding: 36px 0;

    .meau-box {
      margin: 0 0 12px 48px;

      .title {
        line-height: 52px;
        color: #212121;
        font-size: 16px;
        font-weight: 400;
      }

      .uc-nav-list {
        margin: 10px 0 0 0;

        li {
          padding: 6px 0;

          a {
            color: #757575;
            font-size: 14px;
          }

          .active {
            color: #ff6700;
          }
        }
      }

      .line {
        width: 84px;
        margin: 14px 0;
        display: block;
        border-bottom: 1px solid #dbdbdb;
      }
    }
  }
}
</style>
