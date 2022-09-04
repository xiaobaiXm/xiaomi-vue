import { defineStore } from 'pinia'
import { UserOrder } from '@/enums/store/user_store_name'
import { reqCreateOrder } from '@/api/Order'
import { reqUserSelectProductInfo } from '@/api/Carts'
import { ICartInfo } from '@/model/CartsAllInfo'
import { IOrder } from '@/model/Order'

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
    },
    async postCreateOrder (order:IOrder):Promise<void> {
      const res = await reqCreateOrder(order)
      if (res.code === 200) {
        console.log(res)
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
