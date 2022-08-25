<template>
  <div class="btn_box">
    <div class="select_btn">
      <a href="javascript:;" class="btn_primary">加入购物车</a>
    </div>
    <div class="btn_favorite">
      <a href="javascript" class="like"><span class="iconfont icon-aixin"></span>喜欢</a>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.btn_box {
  height: 54px;
  margin: 10px 0 20px 0;

  .select_btn {
    display: inline-block;
    margin-right: 10px;

    .btn_primary {
      display: block;
      width: 298px;
      height: 54px;
      line-height: 52px;
      text-align: center;
      color: #fff;
      font-size: 16px;
      background-color: #ff6700;
      border-color: #ff6700;
      transition: all .4s;
      box-sizing: border-box;
      cursor: pointer;

      &:hover {
        background-color: #f25807;
        color: #fff !important;
      }
    }
  }

  .btn_favorite {
    display: inline-block;
    vertical-align: top;

    .like {
      display: block;
      width: 140px;
      height: 54px;
      line-height: 52px;
      color: #fff;
      font-size: 16px;
      text-align: center;
      background-color: #b0b0b0;
      border: 1px solid #b0b0b0;
      box-sizing: border-box;
      transition: all .4s;

      &:hover {
        background-color: #757575;
        color: #fff !important;
      }

      .iconfont {
        margin-right: 5px;
        vertical-align: middle;
        font-size: 20px;
      }
    }
  }
}
</style>
