import requests from '@/utils/requests'

import { IUserAddressInfo } from './Type'

// 用户全部地址接口
export const reqUserAddressInfo = (data:IUserAddressInfo) => requests({
  url: '/address/userAddress',
  method: 'POST',
  data: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json'
  }
})

// 获取全国地址信息
export const reqGetAllAddressInfo = () => requests({
  url: '/address/info',
  method: 'GET'
})
