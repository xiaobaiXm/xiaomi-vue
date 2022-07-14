import { defineStore } from 'pinia'
import { Category } from '@/enums/store/Home/store_name'

import { reqGetCategoryList } from '@/api/Home/index'

import { ICategory } from './Type/Category'

export const useCategory = defineStore(Category.Test, {
  state: () => {
    return {
      category: [] as ICategory[]
    }
  },
  actions: {
    async getCategoryList ():Promise<void> {
      await reqGetCategoryList().then((result) => {
        if (result.code === 200) {
          this.category = result.data
        } else {
          return Promise.reject(new Error('filed'))
        }
      }, err => {
        return err.message
      })
    }
  },
  getters: {}
})
