import { ref, reactive } from 'vue'

import { IRegisterOrLoginFrom } from './Type'

export let showPwd = ref<boolean>(true)
export let isAgree = ref<boolean>(false)

export const from = reactive<IRegisterOrLoginFrom>({
  username: '',
  password: '',
  secondaryPasswordFn: ''
})

export const changePasswordView = () => {
  showPwd.value = !showPwd.value
}

export const changeChecked = ():void => {
  isAgree.value = !isAgree.value
}

export const checkStatus = (): boolean => {
  if (isAgree.value) {
    return true
  } else {
    return false
  }
}
