import requests from '@/utils/requests'

import { ICreateOrUpdate, IUpdate } from './Type'

// 用户全部购物车接口
export const reqGetAllUserShopCartInfo = () => requests({
  url: '/cart/',
  method: 'GET'
})

// 创建、更新用户购物车接口
export const reqCreateOrUpdateUserCartInfo = (cartInfo:ICreateOrUpdate) => requests({
  url: '/cart/',
  method: 'POST',
  data: JSON.stringify(cartInfo)
})

// 更新用户购物车接口
export const reqUpdateUserCartInfo = (productId : number, cartInfo: IUpdate) => requests({
  url: `/cart/${productId}`,
  method: 'PATCH',
  data: JSON.stringify(cartInfo)
})

// 删除用户购物车接口
export const reqRemoveUserShopCartInfo = (ids: number[]) => requests({
  url: '/cart/',
  method: 'DELETE',
  data: { ids }
})
