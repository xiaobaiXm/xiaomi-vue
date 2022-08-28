import { defineStore } from 'pinia'
import { UserOrder } from '@/enums/store/user_store_name'
import { reqUserSelectProductInfo } from '@/api/Carts'
import { ICartInfo } from '@/model/CartsAllInfo'

export const useUserOrderStore = defineStore(UserOrder.Test, {
  state: () => {
    return {
      orderProductInfo: [] as ICartInfo[]
    }
  },
  actions: {
    // get user select product info
    async getUserSelectProductInfo ():Promise<void> {
      const res = await reqUserSelectProductInfo()
      if (res.code === 200) {
        this.orderProductInfo = res.data.list
      } else {
        return Promise.reject(new Error('false'))
      }
    }
  },
  getters: {
    totalCount ():number {
      let count = 0
      this.orderProductInfo.forEach(item => {
        count += item.number
      })
      return count
    },
    totalPrice (): number {
      let price = 0
      this.orderProductInfo.forEach(item => {
        price += item.number * item.cart_sku_info.price
      })
      return price
    },
    freight ():number {
      if (this.totalPrice < 70) return 10
      return 0
    }
  }
})
