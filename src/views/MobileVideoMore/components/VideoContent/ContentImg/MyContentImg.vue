<template>
  <div class="video_img">
    <a href="#">
      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e74c4ff741bcdfc5b28a48a43e4edc6d.jpg" alt="">
      <span><span class="iconfont icon-bofang"></span></span>
    </a>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.video_img {
  position: relative;
  width: 606px;
  height: 360px;
  background-color: #424242;

  a {
    img {
      width: 100%;
      height: 100%;
    }

    >span {
      position: absolute;
      left: 40px;
      bottom: 20px;
      width: 66px;
      height: 44px;
      border: 2px solid #fff;
      border-radius: 24px;
      color: #fff;
      transition: all .3s;

      .iconfont {
        display: inline-block;
        margin-left: 50%;
        transform: translateX(-50%) translateY(-80%);
        margin-top: 50%;
        font-size: 22px;
      }
    }

    &:hover {
      >span {
        background-color: #ff6700;
        border-color: #ff6700;
      }
    }
  }
}
</style>
