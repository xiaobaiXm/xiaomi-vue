import { defineStore } from 'pinia'
import { Carts } from '@/enums/store/cart_store_name'
import { reqGetAllUserShopCartInfo, reqCreateOrUpdateUserCartInfo, reqUpdateUserCartInfo, reqRemoveUserShopCartInfo, reqSelectAllUserCart } from '@/api/carts'
import { ICartInfo } from '@/model/CartsAllInfo'
import { ICreateOrUpdate, IUpdate } from '@/model/Carts'
export const useCartsStore = defineStore(Carts.Test, {
  state: () => {
    return {
      cart: [] as ICartInfo[],
      count: 0 as number
    }
  },
  actions: {
    // get user carts info
    async getAllUserShopCartInfo(): Promise<void> {
      const res = await reqGetAllUserShopCartInfo()
      if (res.code === 200) {
        this.cart = res.data.list
        this.count = res.data.count
      } else {
        return Promise.reject(new Error('error'))
      }
    },
    // create or update user cart info
    async createOrUpdateUserCartInfo(cartInfo: ICreateOrUpdate): Promise<void> {
      const res = await reqCreateOrUpdateUserCartInfo(cartInfo)
      if (res.code === 200) {
        console.log(res)
      } else {
        return Promise.reject(new Error('error'))
      }
    },
    // update user cart info
    async updateUserCartInfo(id: number, cartInfo: IUpdate): Promise<void> {
      const res = await reqUpdateUserCartInfo(id, cartInfo)
      if (res.code === 200) {
        this.getAllUserShopCartInfo()
      } else {
        return Promise.reject(new Error('error'))
      }
    },
    // remove cart info
    async removeUserShopCartInfo(ids: number[]): Promise<void> {
      const res = await reqRemoveUserShopCartInfo(ids)
      if (res.code === 200) {
        this.getAllUserShopCartInfo()
      } else {
        return Promise.reject(new Error('error'))
      }
    },
    // select all user cart
    async selectAllUserCart(selected: boolean): Promise<void> {
      const res = await reqSelectAllUserCart({ selected })
      if (res.code === 200) {
        this.getAllUserShopCartInfo()
      } else {
        return Promise.reject(new Error('error'))
      }
    }
  },
  getters: {
    allCount() {
      let count = 0
      this.cart.forEach(item => {
        count += item.number
      })
      return count
    },
    selectCount(): number {
      let count = 0
      this.cart.forEach(item => {
        if (item.selected) count += item.number
      })
      return count
    },
    totalPrice(): number {
      let price = 0
      this.cart.forEach(item => {
        if (item.selected) price += item.number * item.cart_sku_info.price
      })
      return price
    },
    difference(): number {
      let count = 0
      if (this.totalPrice < 70) count = 70 - this.totalPrice
      return count
    }
  }
})
