<template>
  <div class="loading" :style="{
    padding: padding
  }">
    <div class="loader"></div>
  </div>
</template>

<script setup lang="ts">
type IProps = {
  padding?: string
}
withDefaults(defineProps<IProps>(), {
  padding: ''
})
</script>

<style lang="less" scoped>
.loading {
  padding: 20px 0;

  .loader {
    position: relative;
    margin: 0 auto;
    width: 4px;
    height: 20px;
    background: #ff6700;
    overflow: visible;
    animation-delay: 0s;
    transform: scale(1);
    transition: height .3s;

    &::after,
    &::before {
      transform-origin: 50% 50%;
      animation-name: loader;
      animation-duration: .3s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-direction: alternate-reverse;
      position: absolute;
      left: 50%;
      top: 50%;
      width: 4px;
      height: 20px;
      content: "";
      background: #ff6700;
    }

    &::after {
      margin: -10px 0 0 6px;
      animation-delay: .5s;
      transform: scaleY(.5);
    }

    &::before {
      margin: -10px 0 0 -10px;
      animation-delay: .25s;
      transform: scaleY(.3);
    }
  }
}

@keyframes loader {
  0% {
    transform: scaleY(.5);
    opacity: .2;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
