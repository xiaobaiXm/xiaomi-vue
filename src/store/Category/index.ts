import { defineStore } from 'pinia'
import { Category } from '@/enums/store/Home/store_name'

import { reqGetTypeNavList } from '@/api/Home/index'

import { ICategory } from './Type/Category'

export const useCategory = defineStore(Category.Test, {
  state: () => {
    return {
      categoryList: [] as ICategory[]
    }
  },
  actions: {
    async getCategoryList () {
      await reqGetTypeNavList().then((result) => {
        this.categoryList = result.data
      })
    }
  },
  getters: {

  }
})
