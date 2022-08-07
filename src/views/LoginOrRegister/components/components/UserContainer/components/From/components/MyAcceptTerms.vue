<template>
  <div class="accept-terms">
    <Form :validation-schema="VeeValidate" class="from">
      <div class="ant-checkbox-wrapper">
        <span class="ant-checkbox" @click="changeChecked">
          <Field type="checkbox" name="isAgree" v-model="from.isAgree" class="ant-checkbox-input"/>
          <!-- <input type="checkbox" name="isAgree" class="ant-checkbox-input"/> -->
          <div class="ant-checkbox-inner" :class="from.isAgree ? 'ant-checkbox-inner-active' : ''">
            <span class="iconfont icon-a-Frame3163"></span>
          </div>
        </span>
        <span class="text" @click="changeChecked">已阅读并同意小米帐号  <a href="javascript:;">用户协议</a>  和  <a href="#">隐私协议</a></span>
      </div>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { from, changeChecked } from '@/hooks/User'

import { Form, Field } from 'vee-validate'

import VeeValidate from '@/utils/validate'

</script>

<style lang="less" scoped>
  .accept-terms {
    margin-top: 20px;
    font-size: 14px;
    font-weight: 400;
    color: #aaa;
    line-height: 20px;
    .ant-checkbox-wrapper {
      color: unset;
      font-size: unset;
      line-height: unset;

      span {
        display: inline-block;
        box-sizing: border-box;
      }
      .ant-checkbox {
        position: relative;
        top: 0;
        margin: 0;
        padding: 0;
        color: rgba(0, 0, 0, .85);
        font-size: 14px;
        line-height: 1.5715;
        list-style: none;
        line-height: 1;
        white-space: nowrap;
        outline: none;
        cursor: pointer;
        .ant-checkbox-input {
          touch-action: manipulation;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 1;
          width: 100%;
          height: 100%;
          vertical-align: middle;
          cursor: pointer;
          opacity: 0;
        }
        .ant-checkbox-inner {
          position: relative;
          top: 0;
          left: 0;
          display: block;
          width: 16px;
          height: 16px;
          direction: ltr;
          text-align: center;
          color: #fff;
          background-size: 100% 100%;
          background-repeat: no-repeat;
          border-radius: 2px;
          background-color: #f9f9f9;
          border: 1px solid #ddd;
          border-collapse: separate;
          transition: all .3s;
          .iconfont {
            font-size: 10px;
          }
        }
        .ant-checkbox-inner-active {
          border: none;
          background-color: #ff6900;
        }
      }
      .text {
        padding: 0 4px;
        vertical-align: bottom;
        cursor: pointer;
        a {
          color: #333;

          &:hover {
            color: #333 !important;
          }
        }
      }
    }
  }
</style>
