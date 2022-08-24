import requests from '@/utils/requests'

import { ISeach } from './Type'

// get search keyword
export const reqGetSearchKeywordInfo = () => requests({
  url: '/search/keyword',
  method: 'GET'
})

// get search product info
export const reqGetSearchProductInfo = (data:ISeach) => requests({
  url: '/search/',
  method: 'POST',
  data: JSON.stringify(data),

})
