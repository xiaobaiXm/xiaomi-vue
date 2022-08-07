import requests from '@/utils/requests'

// 用户全部地址接口
export const reqUserAddressInfo = () => requests({
  url: '/address/userAddress',
  method: 'POST'
})

// 获取全国地址信息
export const reqGetAllAddressInfo = () => requests({
  url: '/address/info',
  method: 'GET'
})
