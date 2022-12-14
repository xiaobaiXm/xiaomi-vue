import requests from '@/utils/requests'

import { IUserAddressInfo } from '@/model/Address'
// import { IAddressPageInfoAxiosResponse, IAddressAllInfoAxiosResponse } from '@/model/UserAddressInfo'
import { } from '@/model/AddressInfo'

// 用户分页地址接口
export const reqUserPageAddressInfo = (data: IUserAddressInfo) => requests({
  url: '/address/address',
  method: 'POST',
  data: JSON.stringify(data)
})

// 用户全部地址接口
export const reqUserAddressInfo = () => requests({
  url: '/address/',
  method: 'GET'
})

// 创建用户地址接口

// 设置用户默认地址接口

// 更新用户地址接口

// 删除用户地址接口

// 获取全国地址信息
export const reqGetAllAddressInfo = () => requests({
  url: '/address/info',
  method: 'GET'
})
