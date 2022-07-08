import { ref } from 'vue'

// 查看密码
export let showPwd = ref<boolean>(true)

export const changePasswordView = () => {
  showPwd.value = !showPwd.value
}
