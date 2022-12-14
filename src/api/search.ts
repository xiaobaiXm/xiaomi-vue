import requests from '@/utils/requests'

import { ISearch } from '@/model/Search'
import { ISearchProductAxiosResponse } from '@/model/SearchProduct'

// get search keyword
export const reqGetSearchKeywordInfo = () => requests({
  url: '/search/keyword',
  method: 'GET'
})

// get search product info
export const reqGetSearchProductInfo = (data:ISearch):Promise<ISearchProductAxiosResponse> => requests({
  url: '/search/',
  method: 'POST',
  data: JSON.stringify(data)
})
