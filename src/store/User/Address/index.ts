import { defineStore } from 'pinia'
import { UserAddress } from '@/enums/store/user_store_name'

import { reqGetAllAddressInfo, reqUserAddressInfo } from '@/api/Address'

import { IAddressInfo } from './Type/AddressInfo'
import { IUserAddressInfo, IAddressPrams } from './Type/UserAddressInfo'

export const useUserAddressStore = defineStore(UserAddress.Test, {
  state: () => {
    return {
      addressInfo: [] as IAddressInfo[],
      userAddressInfo: {} as IUserAddressInfo
    }
  },
  actions: {
    // get all address info
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
    },
    // get user all address info
    async getUserAddressInfo (params: IAddressPrams): Promise<void> {
      const res = await reqUserAddressInfo(params)
      if (res.code === 200) {
        this.userAddressInfo = res.data
      } else {
        return Promise.reject(new Error('false'))
      }
    }
  },
  getters: {

  }
})
