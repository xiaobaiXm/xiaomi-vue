<template>
  <div class="from-login">
    <Form :validation-schema="VeeValidate" v-slot="{ errors }" class="from">
      <div class="ant-col ant-col-xs-24">
        <div class="text_field">
          <div class="form-field-field" :class="{ 'field-active': userName == 1, 'field-error': userName == 2 }">
            <div class="form-field-control">
              <div class="text-field-input">
                <Field type="text" class="from-inp" name="usernameFn" v-model="from.username"
                  :class="{ error: errors.usernameFn }" @focus="userNameFocusInp" @focusout="userNameFocusOutInp" />
                <label class="floating-label"
                  :class="{ 'floating-label-active': userFloating == 1, 'floating-label-error': errors.usernameFn }">账号</label>
              </div>
            </div>
          </div>
          <div class="form-helper-text-error" v-if="errors.usernameFn">{{ errors.usernameFn }}</div>
        </div>
      </div>
      <div class="password-field">
        <div class="form-field-field" :class="{ 'field-active': userPwd == 1, 'field-error': userPwd == 2 }">
          <div class="form-field-control password">
            <div class="text-field-input">
              <Field :type="showPwd ? 'password' : 'text'" name="passwordFn" v-model="from.password" class="from-inp"
                @focus="userPwdFocusInp" @focusout="userPwdFocusOutInp" />
              <label class="floating-label"
                :class="{ 'floating-label-active': userPwdFloating == 1, 'floating-label-error':  errors.passwordFn }">密码</label>
            </div>
          </div>
          <div class="password-field-adornment">
            <span class="iconfont" :class="showPwd ? 'icon-bukejian' : 'icon-kejian'" @click="changePasswordView">
            </span>
          </div>
        </div>
        <div class="form-helper-text-error" v-if="errors.passwordFn">{{ errors.passwordFn }}</div>
        <div class="form-helper-text-error" v-show="loginError">用户名或密码不正确</div>
      </div>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { changePasswordView, showPwd } from '@/hooks/User'
import {
  from,
  loginError,
  userName,
  userFloating,
  userPwd,
  userPwdFloating,
  userNameFocusInp,
  userNameFocusOutInp,
  userPwdFocusInp,
  userPwdFocusOutInp
} from '@/hooks/User/ChangeInpClassName'

import { Form, Field } from 'vee-validate'

import VeeValidate from '@/utils/validate'

</script>

<style lang="less" scoped>
</style>
