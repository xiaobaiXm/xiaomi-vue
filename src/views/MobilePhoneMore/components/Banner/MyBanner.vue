<template>
  <div class="header">
    <div class="gallery-one">
      <div class="swiper_container">
        <div class="swiper_wrapper">
          <div class="swiper_slide">
            <a href="#">
              <img
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3cb0ff35ab6c9acfa96843752a8d4524.jpg?w=5120&h=1240&bg=F4F4F4"
                alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.header {

  .gallery-one {
    height: 620px;
    overflow: hidden;
    position: relative;

    .swiper_container {
      position: relative;
      left: 50%;
      margin-left: -1280px;
      width: 2560px;
      height: 620px;
      background-color: #f4f4f4;

      .swiper_wrapper {
        position: relative;
        display: flex;
        width: 1005px;
        height: 100%;

        .swiper_slide {
          position: relative;
          width: 2560px;
          height: 100%;
          flex-shrink: 0;

          a {
            img {
              position: relative;
              height: 620px;
              padding-bottom: 2560px;
              left: 50%;
              margin-left: -1280px;
            }
          }
        }
      }
    }
  }
}
</style>
