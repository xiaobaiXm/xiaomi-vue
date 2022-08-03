import requests from '@/utils/requests'

import { ILogin, IRegister } from './Type'

// 登录接口
export const reqLogin = (data:ILogin) => requests({
  url: '/user/login',
  method: 'GET',
  data
})

// 注册接口
export const reqRegister = (data:IRegister) => requests({
  url: '/user/register',
  method: 'POST',
  data
})

// 获取用户信息接口
export const reqUserInfo = () => requests({
  url: '/user/userInfo',
  method: 'POST'
})
