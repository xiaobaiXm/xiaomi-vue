export const VeeValidateRegister = {
  usernameFn (value: string) {
    if (!value) return '请输入账号'
    return true
  },
  passwordFn (value: string) {
    if (!value) return '请输入密码'
    return true
  },
  secondaryPasswordFn (value: string) {
    if (!value) return '请输入确认密码'
    // if (passwordFn(value)) return '两次密码输入不正确'
    return true
  }
}
export const VeeValidateLogin = {
  usernameFn (value: string) {
    if (!value) return '请输入账号'
    return true
  },
  passwordFn (value: string) {
    if (!value) return '请输入密码'
    return true
  }
}

export const VeeValidateAgree = {
  isAgree (value:boolean) {
    if (!value) return false
    return true
  }
}
