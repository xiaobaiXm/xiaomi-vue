import { ref, reactive } from 'vue'

import { IRegisterOrLoginFrom } from './Type'

export let showPwd = ref<boolean>(true)
export const formCom = ref(null)

export const from = reactive<IRegisterOrLoginFrom>({
  username: null,
  password: null,
  secondaryPasswordFn: null,
  isAgree: false
})

export const changePasswordView = () => {
  showPwd.value = !showPwd.value
}

export const changeChecked = ():void => {
  from.isAgree = !from.isAgree
}

export const register = async () => {
  // const valid = await fromCom?.value?.validate()
  // console.log(valid)
}

export const login = async () => {
  // console.log(formCom)
  // const valid = await formCom.value?.validate()
  // console.log(valid)
}
