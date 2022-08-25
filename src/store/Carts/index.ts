import { defineStore } from 'pinia'
import { Carts } from '@/enums/store/cart_store_name'
import { reqGetAllUserShopCartInfo, reqCreateOrUpdateUserCartInfo, reqUpdateUserCartInfo, reqRemoveUserShopCartInfo } from '@/api/Carts'
import { ICartInfo } from './Type/CartsAllInfo'
import { ICreateOrUpdate, IUpdate } from '@/api/Carts/Type'

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
    // create or update user cart info
    async createOrUpdateUserCartInfo (cartInfo:ICreateOrUpdate):Promise<void> {
      const res = await reqCreateOrUpdateUserCartInfo(cartInfo)
      if (res.code === 200) {
        console.log(res)
      } else {
        return Promise.reject(new Error('false'))
      }
    },
    // update user cart info
    async updateUserCartInfo (productId : number, cartInfo :IUpdate):Promise<void> {
      const res = await reqUpdateUserCartInfo(productId, cartInfo)
      if (res.code === 200) {
        console.log(res)
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
