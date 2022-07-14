import requests from '@/utils/requests'

// 登录接口
export const reqLogin = () => requests({
  url: '/user/login',
  method: 'GET'
})

// 注册接口
export const reqRegister = () => requests({
  url: '/user/register',
  method: 'POST'
})

// 获取用户信息接口
export const reqUserInfo = () => requests({
  url: '/user/userInfo',
  method: 'POST'
})

// 用户地址接口
export const reqUserAddressInfo = () => requests({
  url: '/address/userAddress',
  method: 'POST'
})

// 用户购物车接口
export const reqUserShopCartInfo = () => requests({
  url: '/cart/userCart',
  method: 'POST'
})
