import { ref } from 'vue'

import { from, isAgree } from './index'

export let userName = ref<number>(0)
export let userFloating = ref<number>(0)
export let userPwd = ref<number>(0)
export let userPwdFloating = ref<number>(0)
export let userReqPwd = ref<number>(0)
export let userReqPwdFloating = ref<number>(0)

export let loginError = ref<boolean>(false)

export const userNameFocusInp = (): void => {
  userName.value = 1
  userFloating.value = 1
}

export const userNameFocusOutInp = (): void => {
  if (from.username === null || from.username === '') {
    userName.value = 2
    userFloating.value = 2
  } else {
    userName.value = 0
  }
}

export const userPwdFocusInp = (): void => {
  loginError.value = false
  userPwd.value = 1
  userPwdFloating.value = 1
}

export const userPwdFocusOutInp = (): void => {
  if (from.password === null || from.password === '') {
    userPwd.value = 2
    userPwdFloating.value = 2
  } else {
    userPwd.value = 0
  }
}

export const userReqPwdFocusOutInp = (): void => {
  userReqPwd.value = 1
  userReqPwdFloating.value = 1
}

export const userReqPwdFocusInp = (): void => {
  if (from.secondaryPasswordFn === null || from.secondaryPasswordFn === '') {
    userReqPwd.value = 2
    userReqPwdFloating.value = 2
  } else {
    userReqPwd.value = 0
  }
}

// clear user info
export const clear = (): void => {
  from.username = ''
  from.password = ''
  from.secondaryPasswordFn = ''
  isAgree.value = false
  userName.value = 0
  userFloating.value = 0
  userPwd.value = 0
  userPwdFloating.value = 0
  userReqPwd.value = 0
  userReqPwdFloating.value = 0
}
