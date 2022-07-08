
import { ref } from 'vue'

let name = ref<string | number>('')
let passWord = ref<string | number>('')
let passWordTwo = ref<string | number>('')

let userName = ref<number>(0)
let userFloating = ref<number>(0)

let userPwd = ref<number>(0)
let userPwdFloating = ref<number>(0)

const userNameFocusInp = () => {
  userName.value = 1
  userFloating.value = 1
}

const userNameFocusOutInp = () => {
  if (name.value === '') {
    userName.value = 2
    userFloating.value = 2
  } else {
    userName.value = 0
  }
}

const userPwdFocusOutInp = () => {
  if (passWord.value === '') {
    userPwd.value = 2
    userPwdFloating.value = 2
  } else {
    userPwd.value = 0
  }
}

const userPwdFocusInp = () => {
  userPwd.value = 1
  userPwdFloating.value = 1
}

export {
  name,
  passWord,
  passWordTwo,
  userName,
  userFloating,
  userPwd,
  userPwdFloating,
  userNameFocusInp,
  userNameFocusOutInp,
  userPwdFocusInp,
  userPwdFocusOutInp
}
