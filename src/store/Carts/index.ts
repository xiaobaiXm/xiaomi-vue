import { defineStore } from 'pinia'
import { Carts } from '@/enums/store/Carts/store_name'

import { reqGetUserAllCartsInfo } from '@/api/Carts/'

export const useCarts = defineStore(Carts.Test, {
  state: () => {
    return {

    }
  },
  actions: {
    // get user carts info
    async getUserAllCartsInfo ():Promise<void> {
      const res = await reqGetUserAllCartsInfo()
      if (res.code === 200) {
        console.log(res)
      } else {
        return Promise.reject(new Error('filed'))
      }
    }
  },
  getters: {}
})
