import { defineStore } from 'pinia'
import { Detail } from '@/enums/store/detail_store_name'
import { reqGetProductDetailInfo } from '@/api/detail'

export const useDetailStore = defineStore(Detail.Test, {
  state: () => {
    return {
      productInfo: []
    }
  },
  actions: {
    // get product detail info
    async getProductDetailInfo(productId: number): Promise<void> {
      const res = await reqGetProductDetailInfo({ productId })
      if (res.code === 200) {
        console.log(res)
      } else {
        return Promise.reject(new Error('error'))
      }
    }
  },
  getters: {}
})
