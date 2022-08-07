import { defineStore } from 'pinia'
import { UserAddress } from '@/enums/store/user_store_name'

import { reqGetAllAddressInfo } from '@/api/Address'

import { IAddressInfo } from './Type/AddressInfo'

export const useUserAddressStore = defineStore(UserAddress.Test, {
  state: () => {
    return {
      addressInfo: [] as IAddressInfo[]
    }
  },
  actions: {
    async getAllAddressInfo ():Promise<void> {
      const res = await reqGetAllAddressInfo()
      if (res.code === 200) {
        const map = res.data.reduce((pre: { [x: string]: unknown }, cur: { id: number; children: never[] }) => {
          pre[cur.id] = cur
          cur.children = []
          return pre
        }, {})

        const result = res.data.filter((item: { pid: number; deep: number }) => {
          if (map[item.pid]) {
            map[item.pid].children.push(item)
          }
          return item.deep === 0
        })
        this.addressInfo = result
      } else {
        return Promise.reject(new Error('false'))
      }
    }
  },
  getters: {

  }
})
