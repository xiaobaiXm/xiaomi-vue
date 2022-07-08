<template>
  <div class="from-reg">
    <!-- 注册账号 -->
    <div class="ant-col ant-col-xs-0">
      <div class="form-field-field" :class="{ 'field-active': userName == 1, 'field-error': userName == 2 }">
        <div class="form-field-control">
          <div class="text-field-input">
            <input type="text" v-model="name" class="from-inp" @focus="userNameFocusInp"
              @focusout="userNameFocusOutInp">
            <label class="floating-label"
              :class="{ 'floating-label-active': userFloating == 1, 'floating-label-error': userFloating == 2 }">注册用户名</label>
          </div>
        </div>
      </div>
      <div class="form-helper-text-error" v-show="userName == 2">请输入账号</div>
      <div class="form-helper-text-error hide">账号格式错误 应为2-12位</div>
    </div>
    <!-- 注册密码 -->
    <div class="password-field">
      <div class="form-field-field">
        <div class="form-field-control">
          <div class="text-field-input">
            <input type="password" v-model="passWord" class="from-inp" @focus="userPwdFocusOutInp"
              @focusout="userPwdFocusInp">
            <label class="floating-label">注册密码</label>
          </div>
        </div>
      </div>
      <div class="form-helper-text hide">请输入密码</div>
      <div class="form-helper-text hide">密码格式错误 应为8-16位</div>
    </div>
    <!-- 确认注册密码 -->
    <div class="password-field">
      <div class="form-field-field">
        <div class="form-field-control">
          <div class="text-field-input">
            <input type="password" v-model="passWordTwo" class="from-inp" @focus="userPwdFocusOutInp"
              @focusout="userPwdFocusInp">
            <label class="floating-label">确认注册密码</label>
          </div>
        </div>
      </div>
      <div class="form-helper-text hide">两次密码不一致</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  name, passWord, passWordTwo, userName, userFloating, userNameFocusInp, userNameFocusOutInp, userPwdFocusInp,
  userPwdFocusOutInp
} from '@/hooks/User/ChangeInpClassName'

</script>

<style lang="less" scoped>
</style>
