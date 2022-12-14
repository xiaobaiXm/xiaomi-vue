import requests from '@/utils/requests'

import { ILogin, IRegister, IChangePassword, IVerifyName } from '@/model/User'

// 登录接口
export const reqLogin = (data: ILogin) => requests({
  url: '/user/login',
  method: 'POST',
  data: JSON.stringify(data)
})

// 注册接口
export const reqRegister = (data: IRegister) => requests({
  url: '/user/register',
  method: 'POST',
  data: JSON.stringify(data)
})

// 查询用户名是否重名
export const reqVerifyName = (username: IVerifyName) => requests({
  url: '/user/verifyName',
  method: 'POST',
  data: JSON.stringify(username)
})

// 修改密码
export const reqChangePassword = (password: IChangePassword) => requests({
  url: '/user/',
  method: 'PATCH',
  data: JSON.stringify(password)
})

// 获取用户信息接口
export const reqUserInfo = () => requests({
  url: '/user/',
  method: 'GET'
})
