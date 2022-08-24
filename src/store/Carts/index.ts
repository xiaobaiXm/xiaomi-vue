import { defineStore } from 'pinia'
import { Carts } from '@/enums/store/cart_store_name'
import { reqGetAllUserShopCartInfo, reqRemoveUserShopCartInfo } from '@/api/Carts'
import { ICartInfo } from './Type/CartsAllInfo'

export const useCartsStore = defineStore(Carts.Test, {
  state: () => {
    return {
      cart: [] as ICartInfo[],
      count: 0 as number
    }
  },
  actions: {
    // get user carts info
    async getAllUserShopCartInfo (): Promise<void> {
      const res = await reqGetAllUserShopCartInfo()
      if (res.code === 200) {
        this.cart = res.data.list
        this.count = res.data.count
      } else {
        return Promise.reject(new Error('false'))
      }
    },
    // remove cart info
    async removeUserShopCartInfo (ids: number[]): Promise<void> {
      const res = await reqRemoveUserShopCartInfo(ids)
      if (res.code === 200) {
        this.getAllUserShopCartInfo()
      } else {
        return Promise.reject(new Error('false'))
      }
    }
  },
  getters: {}
})
