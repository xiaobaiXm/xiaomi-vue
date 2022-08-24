import requests from '@/utils/requests'

// 用户全部购物车接口
export const reqGetAllUserShopCartInfo = () => requests({
  url: '/cart/',
  method: 'GET'
})

// 删除用户购物车接口
export const reqRemoveUserShopCartInfo = (ids: number[]) => requests({
  url: '/cart/',
  method: 'DELETE',
  data: { ids }
})
