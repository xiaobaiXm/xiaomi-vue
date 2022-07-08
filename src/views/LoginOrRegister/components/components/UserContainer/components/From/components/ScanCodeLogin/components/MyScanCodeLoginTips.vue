<template>
  <div class="scan-code-login__tips">
    <div class="center-text">
      <div class="center-text-content">
        请使用小米手机/米家等小米旗下APP扫码登录
        <span class="anticon-question-circle" @mouseleave="flagE" @mouseenter="changeFlag"><span
            class="iconfont icon-wenhao"></span></span>
      </div>
    </div>
  </div>
  <teleport to='body'>
    <MyAnsweringQuestionVue ref="flag"></MyAnsweringQuestionVue>
  </teleport>
</template>

<script setup lang="ts">
import MyAnsweringQuestionVue from './MyAnsweringQuestion.vue'

import { ref } from 'vue'

const flag = ref()

const changeFlag = (): void => {
  flag.value.flag = true
}

const flagE = (): void => {
  flag.value.flag = false
}
</script>

<style lang="less" >
.scan-code-login__tips {
  max-width: 360px;
  margin: 28px auto 0;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: #333;
  line-height: 24px;

  .center-text {
    .center-text-content {
      display: inline-block;
      text-align: left;

      .anticon-question-circle {
        display: inline-block;
        margin-left: 6px;
        width: 16px;
        height: 16px;
        transition: all .3s cubic-bezier(.645, .045, .355, 1);
        font-size: 16px;
        vertical-align: middle;
        background-color: #ddd;
        border-radius: 8px;

        .iconfont {
          display: inline-block;
          margin-top: -4px;
          color: #fff;
          vertical-align: top;
        }

        &:hover {
          background-color: #ff6700;

          .ant-popover {
            left: 1100px !important;
            top: 272px !important;
          }
        }
      }
    }
  }
}
</style>
