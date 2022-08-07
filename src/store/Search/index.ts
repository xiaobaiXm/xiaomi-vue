import { defineStore } from 'pinia'
import { SearchName } from '@/enums/store/search_store_name'

import { reqGetSearchKeywordInfo, reqGetSearchProductInfo } from '@/api/Search'

import { ISearch } from './Type/Search'
import { ISearchProductInfo } from './Type/SearchProduct'
import { ISearchKeyword } from './Type/keyword'

export const useSearchStore = defineStore(SearchName.Test, {
  state: () => {
    return {
      keyword: [] as ISearchKeyword[],
      searchError: false as boolean,
      searchProductInfo: [] as ISearchProductInfo[]
    }
  },
  actions: {
    async getSearchKeywordInfo ():Promise<void> {
      const res = await reqGetSearchKeywordInfo()
      if (res.code === 200) {
        this.keyword = res.data
      } else {
        return Promise.reject(new Error('false'))
      }
    },
    async getSearchProductInfo (search:ISearch):Promise<void> {
      const res = await reqGetSearchProductInfo(search)
      if (res.code === 200) {
        if (res.data.total > 0) {
          this.searchProductInfo = res.data
        } else {
          this.searchError = true
        }
      } else if (res.code === 10603 || res.code === 10604) {
        this.searchError = true
      } else {
        return Promise.reject(new Error('false'))
      }
    }
  },
  getters: {
    homeSearchKeyword (): ISearchKeyword[] {
      return this.keyword.slice(0, 8)
    }
  }
})
