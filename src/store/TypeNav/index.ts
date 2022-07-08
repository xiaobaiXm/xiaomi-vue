import { defineStore } from 'pinia'
import { TypeNav } from '@/enums/store/Home/store_name'

import { reqGetTypeNavList } from '@/api/Home/index'

import { ITypeNav } from './Type/TypeNav'

export const useTypeNav = defineStore(TypeNav.Test, {
  state: () => {
    return {
      typeNav: [] as ITypeNav[]
    }
  },
  actions: {
    async getTypeNavList ():Promise<void> {
      await reqGetTypeNavList().then((result) => {
        this.typeNav = result.data
      }, err => {
        return err.message
      })
    }
  },
  getters: {

  }
})
