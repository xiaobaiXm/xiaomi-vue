import { defineStore } from 'pinia'
import { SearchName } from '@/enums/store/Search/store_name'

import { reqGetSearchKeywordInfo } from '@/api/Search'

import { ISearchKeyword } from './Type/keyword'

export const useSearchStore = defineStore(SearchName.Test, {
  state: () => {
    return {
      keyword: [] as ISearchKeyword[]
    }
  },
  actions: {
    async getSearchKeywordInfo () {
      const res = await reqGetSearchKeywordInfo()
      if (res.code === 200) {
        this.keyword = res.data
      } else {
        return Promise.reject(new Error('filed'))
      }
    }
  },
  getters: {
    homeSearchKeyword (): ISearchKeyword[] {
      return this.keyword.slice(0, 8)
    }
  }
})
