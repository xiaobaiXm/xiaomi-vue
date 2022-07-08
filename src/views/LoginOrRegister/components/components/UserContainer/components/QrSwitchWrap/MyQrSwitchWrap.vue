<template>
  <div class="qr-switch-wrap" @click="changeFlag">
    <div class="qr-login-switch">
      <span class="qr-login-switch__icon">
        <span class="iconfont" :class="flag? 'icon-erweima' :'icon-diannao'"></span>
      </span>
      <div style="position: absolute; top: 0px; left: 0px; width: 100%;">
        <div>
          <div class="ant-popover mi-qr-login-switch__popover ant-popover-placement-left  ant-popover-hidden"
            style="transform-origin: 100px 50%;">
            <div class="ant-popover-content">
              <div class="ant-popover-arrow" style="border-color: #ff5c00;">
                <span class="ant-popover-arrow-content" style="background-color: #ff5c00;"></span>
              </div>
              <div class="ant-popover-inner">
                <div class="ant-popover-inner-content" v-if="flag">扫码登录</div>
                <div class="ant-popover-inner-content" v-else>密码登录</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'

import { useRouter } from 'vue-router'
const router = useRouter()

const instance = getCurrentInstance()

let flag = ref<boolean>(true)

const changeFlag = () => {
  flag.value = !flag.value
  instance?.proxy?.$Bus.emit('changeFromFlag', flag.value)
  router.push('/login')
}
</script>

<style lang="less" scoped>
.qr-switch-wrap {
  position: absolute;
  top: 0;
  right: 0;
  outline: 1px solid rgba(0, 0, 0, 0);

  .qr-login-switch {
    position: relative;
    width: 64px;
    height: 64px;
    z-index: 1000;
    opacity: .4;
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
    cursor: pointer;
    transform: translateZ(0);
    border: 32px solid #ff5c00;
    border-bottom-color: rgba(0, 0, 0, 0);
    background-size: cover;
    border-left-color: rgba(0, 0, 0, 0);

    .qr-login-switch__icon {
      display: inline-block;
      position: absolute;
      top: -31px;
      right: -24px;
      text-align: center;

      .iconfont {
        color: #fff;
        font-size: 38px;
      }
    }

    &:hover {
      opacity: 1;

      .ant-popover {
        top: -25px !important;
        left: -125px !important;
      }
    }
  }
}
</style>
