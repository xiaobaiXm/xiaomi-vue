<template>
  <div class="layout__toast">
    <div class="toast-desktop toast">
      <div>
        <span class="iconfont icon-gantanhao1"></span>
        请您同意用户条款
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.layout__toast {
  width: 100%;
  height: 100%;

  .toast-desktop {
    position: absolute;
    bottom: 55%;
    transform: translate(-50%, 50%);
    box-shadow: rgb(162 162 162 / 20%) 0px 5px 20px;
    min-width: unset;
    color: rgb(52, 52, 52);
    flex-grow: initial;
    padding: 14px 20px;
    background-color: rgb(255, 255, 255);
    border-radius: 4px;
    font-size: 14px;

    .iconfont {
      margin-right: 5px;
      color: #ff6700;
      vertical-align: middle;
    }
  }

  .toast {
    left: 50%;
    z-index: 9999;
  }
}
</style>
