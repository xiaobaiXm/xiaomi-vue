import { defineStore } from 'pinia'
import { Category } from '@/enums/store/home_store_name'

import { reqGetCategoryList } from '@/api/Home/index'

import { ICategory } from '@/model/Category'

export const useCategory = defineStore(Category.Test, {
  state: () => {
    return {
      category: [] as ICategory[]
    }
  },
  actions: {
    async getCategoryList ():Promise<void> {
      const res = await reqGetCategoryList()
      if (res.code === 200) {
        this.category = res.data
      } else {
        return Promise.reject(new Error('false'))
      }
    }
  },
  getters: {}
})
