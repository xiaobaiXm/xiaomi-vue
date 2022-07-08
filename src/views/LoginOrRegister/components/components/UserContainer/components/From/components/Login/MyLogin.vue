<template>
  <div class="from-login">
    <!-- 登录账号 -->
    <div class="ant-col ant-col-xs-24">
      <div class="text_field">
        <div class="form-field-field" :class="{ 'field-active': userName == 1, 'field-error': userName == 2 }">
          <div class="form-field-control">
            <div class="text-field-input">
              <input type="text" class="from-inp" v-model="name" @focus="userNameFocusInp"
                @focusout="userNameFocusOutInp">
              <label class="floating-label"
                :class="{ 'floating-label-active': userFloating == 1, 'floating-label-error': userFloating == 2 }">用户名</label>
            </div>
          </div>
        </div>
        <div class="form-helper-text-error" v-show="userName == 2">请输入账号</div>
      </div>
    </div>
    <!-- 登录密码 -->
    <div class="password-field">
      <div class="form-field-field" :class="{ 'field-active': userPwd == 1, 'field-error': userPwd == 2 }">
        <div class="form-field-control password">
          <div class="text-field-input">
            <input :type="showPwd ? 'password' : 'text'" v-model="passWord" class="from-inp" @focus="userPwdFocusInp"
              @focusout="userPwdFocusOutInp">
            <label class="floating-label"
              :class="{'floating-label-active': userPwdFloating == 1, 'floating-label-error': userPwdFloating == 2,'floating-label-error': userPwdFloating == 4}">密码</label>
          </div>
        </div>
        <div class="password-field-adornment">
          <span class="iconfont" :class="showPwd ? 'icon-bukejian' : 'icon-kejian'" @click="changePasswordView">
          </span>
        </div>
      </div>
      <div class="form-helper-text-error" v-show="userPwdFloating == 2">请输入密码</div>
      <div class="form-helper-text-error" v-show="userPwdFloating == 4">用户名或密码不正确</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { changePasswordView, showPwd } from '@/hooks/User/index'
import {
  name, passWord, userName, userFloating, userPwd,
  userPwdFloating, userNameFocusInp, userNameFocusOutInp, userPwdFocusInp,
  userPwdFocusOutInp
} from '@/hooks/User/ChangeInpClassName'

</script>

<style lang="less" scoped>
</style>
