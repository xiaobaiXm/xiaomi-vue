import requests from '@/utils/requests'

// 用户全部地址接口
export const reqUserAddressInfo = () => requests({
  url: '/address/userAddress',
  method: 'POST'
})
