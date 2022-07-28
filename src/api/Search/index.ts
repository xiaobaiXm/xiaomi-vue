import requests from '@/utils/requests'

// get search keyword
export const reqGetSearchKeywordInfo = () => requests({
  url: '/search/keyword',
  method: 'GET'
})
