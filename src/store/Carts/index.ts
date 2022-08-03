import { defineStore } from 'pinia'
import { Carts } from '@/enums/store/cart_store_name'

import { reqGetAllUserShopCartInfo } from '@/api/Carts/'

export const useCartsStore = defineStore(Carts.Test, {
  state: () => {
    return {
      cart: []
    }
  },
  actions: {
    // get user carts info
    async getAllUserShopCartInfo ():Promise<void> {
      const res = await reqGetAllUserShopCartInfo()
      if (res.code === 200) {
        console.log(res)
      } else {
        return Promise.reject(new Error('false'))
      }
    }
  },
  getters: {}
})
