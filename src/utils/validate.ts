const VeeValidate = {
  usernameFn (value: string) {
    if (!value) return '请输入账号'
    if (!/^[a-zA-Z]\w{2,12}$/.test(value)) return '必须以字母开头，且为2-12个字符'
    return true
  },
  passwordFn (value: string) {
    if (!value) return '请输入登录密码'
    if (!/\w{8,16}/.test(value)) return '密码格式为8-16个字符'
    return true
  },
  isAgree (value:boolean) {
    if (!value) return false
    return true
  }
}

export default VeeValidate
