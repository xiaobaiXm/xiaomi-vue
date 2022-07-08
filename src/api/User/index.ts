import requests from '@/utils/requests'

// 登录接口
export const reqLogin = () => requests({
  url: '/login',
  method: 'GET'
})

// 注册接口
export const reqRegister = () => requests({
  url: '/register',
  method: 'POST'
})

// 获取用户信息接口
export const reqUserInfo = () => requests({
  url: '/userInfo',
  method: 'POST'
})

// 用户地址接口
export const reqUserAddressInfo = () => requests({
  url: '/userAddress',
  method: 'POST'
})

// 用户购物车接口
export const reqUserShopCartInfo = () => requests({
  url: '/userCart',
  method: 'POST'
})
