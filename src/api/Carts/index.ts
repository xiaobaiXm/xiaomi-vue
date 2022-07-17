import requests from '@/utils/requests'

// get user carts info
export const reqGetUserAllCartsInfo = () => requests({
  url: '/cart/',
  method: 'GET'
})
