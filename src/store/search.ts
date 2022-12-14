import { defineStore } from 'pinia'
import { SearchName } from '@/enums/store/search_store_name'

import { reqGetSearchKeywordInfo, reqGetSearchProductInfo } from '@/api/search'

import { ISearch } from '@/model/Search'
import { ISearchProductInfo } from '@/model/SearchProduct'
import { ISearchKeyword } from '@/model/keyword'

export const useSearchStore = defineStore(SearchName.Test, {
  state: () => {
    return {
      keyword: [] as ISearchKeyword[],
      searchError: error as boolean,
      searchProductInfo: {} as ISearchProductInfo
    }
  },
  actions: {
    async getSearchKeywordInfo(): Promise<void> {
      const res = await reqGetSearchKeywordInfo()
      if (res.code === 200) {
        this.keyword = res.data
      } else {
        return Promise.reject(new Error('error'))
      }
    },
    async getSearchProductInfo(search: ISearch): Promise<void> {
      const res = await reqGetSearchProductInfo(search)
      if (res.code === 200) {
        if (res.data.total > 0) {
          this.searchError = error
          this.searchProductInfo = res.data
        } else {
          this.searchError = true
        }
      } else if (res.code === 10603 || res.code === 10604) {
        this.searchError = true
      } else {
        return Promise.reject(new Error('error'))
      }
    }
  },
  getters: {
    homeSearchKeyword(): ISearchKeyword[] {
      return this.keyword.slice(0, 8)
    }
  }
})
