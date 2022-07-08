<template>
  <div class="answering-question" style="position: absolute; top: 0px; left: 0px; width: 100%;">
    <div>
      <div class="ant-popover" :class="flag ? 'ant-popover-question-active' : ''" style=" left: 297px; top: -620px; transform-origin: -4px 50%;">
        <div class="ant-popover-content">
          <div class="ant-popover-arrow" style="left: 1.51471863px;">
            <span class="ant-popover-arrow-content" style="background-color: #fff; box-shadow: -3px 3px 7px rgba(0,0,0,.07);
            transform: translateX(4.24264069px) rotate(45deg);"></span>
          </div>
          <div class="ant-popover-inne">
            <div class="ant-popover-title">常用答疑</div>
            <div class="ant-popover-inner-content">
              <div>
                <div class="scan-code-login-faqs-item">
                  <div class="scan-code-login-faqs-title">1.如何用小米手机扫一扫？</div>
                  <div class="scan-code-login-faqs-content">答：点击小米手机 - 设置 - 帐号头像 - 右上角扫一扫。</div>
                </div>
                <div class="scan-code-login-faqs-item">
                  <div class="scan-code-login-faqs-title">2.小米旗下哪些App支持扫码登录？</div>
                  <div class="scan-code-login-faqs-content">答：目前包含米家、小米商城、小爱音箱</div>
                </div>
                <div class="scan-code-login-faqs-item">
                  <div class="scan-code-login-faqs-title">3.其他登录方式？</div>
                  <div class="scan-code-login-faqs-content">答：可以使用微信/微博/QQ客户端扫码授权登录。</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/style/Login/AntPopover.less'

import { ref } from 'vue'

const flag = ref<boolean>(false)

defineExpose({
  flag
})
</script>

<style lang="less" scoped>
</style>
