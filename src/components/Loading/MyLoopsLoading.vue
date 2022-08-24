<template>
  <div class="loading">
    <svg class="icon page-loading-img" viewBox="0 0 81 80" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="none"
      width="81" height="80">
      <path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd"
        d="M80.5 40C80.5 62.0914 62.5914 80 40.5 80C18.4086 80 0.5 62.0914 0.5 40C0.5 17.9086 18.4086 0 40.5 0C62.5914 0 80.5 17.9086 80.5 40ZM72.6042 40.013C72.6042 57.6861 58.2773 72.013 40.6042 72.013C22.9311 72.013 8.60417 57.6861 8.60417 40.013C8.60417 22.3399 22.9311 8.01302 40.6042 8.01302C58.2773 8.01302 72.6042 22.3399 72.6042 40.013ZM24.5 48C28.9183 48 32.5 44.4183 32.5 40C32.5 35.5817 28.9183 32 24.5 32C20.0817 32 16.5 35.5817 16.5 40C16.5 44.4183 20.0817 48 24.5 48Z"
        p-id="4397" fill="black"></path>
    </svg>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 29px;
  width: 29px;
  z-index: 9;

  .page-loading-img {
    height: 29px;
    width: 29px;
    border-radius: 100%;
    display: inline-block;
    animation-fill-mode: both;
    animation: loadingRotate 1s 0s linear infinite;
  }
}

@keyframes loadingRotate {
  0% {
    transform: rotate(0) scale(1);
  }

  50% {
    transform: rotate(180deg) scale(1);
  }

  100% {
    transform: rotate(360deg) scale(1);
  }
}
</style>
