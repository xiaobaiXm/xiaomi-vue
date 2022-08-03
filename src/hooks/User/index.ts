import { ref } from 'vue'

export let showPwd = ref<boolean>(true)
export let checked = ref<boolean>(false)
export const fromCom = ref(null)

export const changePasswordView = () => {
  showPwd.value = !showPwd.value
}

export const changeChecked = ():void => {
  checked.value = !checked.value
}

export const register = async () => {
  console.log('ok')
}

export const login = async () => {
  console.log('ok')
}
