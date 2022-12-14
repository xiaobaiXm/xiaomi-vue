<template>
  <div class="from-reg">
    <Form :validation-schema="VeeValidateRegister" v-slot="{ errors }" ref="registerFormCom">
      <div class="ant-col ant-col-xs-0">
        <div class="form-field-field" :class="{ 'field-active': userName == 1, 'field-error': userName == 2 }">
          <div class="form-field-control">
            <div class="text-field-input">
              <Field type="text" v-model="from.username" name="usernameFn" :class="{ error: errors.usernameFn }"
                class="from-inp" @focus="userNameFocusInp" @focusout="userNameFocusOutInp" @blur="verifyUserName" />
              <label class="floating-label"
                :class="{ 'floating-label-active': userFloating == 1, 'floating-label-error': userFloating == 2 }">注册用户名</label>
            </div>
          </div>
        </div>
        <div class="form-helper-text-error" v-if="errors.usernameFn">{{ errors.usernameFn }}</div>
        <!-- <div class="form-helper-text-error" v-if="store.verifyFlag">该用户名已被使用</div> -->
      </div>
      <div class="password-field">
        <div class="form-field-field" :class="{ 'field-active': userPwd == 1, 'field-error': userPwd == 2 }">
          <div class="form-field-control">
            <div class="text-field-input">
              <Field type="password" v-model="from.password" name="passwordFn" class="from-inp" @focus="userPwdFocusInp"
                @focusout="userPwdFocusOutInp" />
              <label class="floating-label"
                :class="{ 'floating-label-active': userPwdFloating == 1, 'floating-label-error': userPwdFloating == 2 }">密码</label>
            </div>
          </div>
        </div>
        <div class="form-helper-text-error" v-if="errors.passwordFn">{{ errors.passwordFn }}</div>
      </div>
      <div class="password-field">
        <div class="form-field-field" :class="{ 'field-active': userReqPwd == 1, 'field-error': userReqPwd == 2 }">
          <div class="form-field-control">
            <div class="text-field-input">
              <Field type="password" v-model="from.secondaryPasswordFn" name="secondaryPasswordFn" class="from-inp"
                @focus="userReqPwdFocusOutInp" @focusout="userReqPwdFocusInp" />
              <label class="floating-label"
                :class="{ 'floating-label-active': userReqPwdFloating == 1, 'floating-label-error': errors.secondaryPasswordFn }">确认密码</label>
            </div>
          </div>
        </div>
        <div class="form-helper-text-error" v-if="errors.secondaryPasswordFn">{{ errors.secondaryPasswordFn }}</div>
      </div>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { from } from '@/hooks/User'
import {
  userName,
  userFloating,
  userPwd,
  userPwdFloating,
  userReqPwd,
  userReqPwdFloating,
  userNameFocusInp,
  userNameFocusOutInp,
  userPwdFocusInp,
  userPwdFocusOutInp,
  userReqPwdFocusOutInp,
  userReqPwdFocusInp
} from '@/hooks/User/ChangeInpClassName'

import { Form, Field } from 'vee-validate'

import { VeeValidateRegister } from '@/utils/validate'
import { useUserStore } from '@/store/user'

const store = useUserStore()

const verifyUserName = () => {
  if (from.username === null || from.username === '') {
    store.verifyName(from.username)
  }
}
</script>

<style lang="less" scoped>
</style>
