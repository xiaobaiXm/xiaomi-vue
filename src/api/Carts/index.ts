import requests from '@/utils/requests'

// 用户全部购物车接口
export const reqGetAllUserShopCartInfo = () => requests({
  url: '/cart/userCart',
  method: 'POST'
})
