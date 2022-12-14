import { defineStore } from 'pinia'
import { UserAddress } from '@/enums/store/user_store_name'

import { reqGetAllAddressInfo, reqUserAddressInfo, reqUserPageAddressInfo } from '@/api/address'

import { IAddressInfo } from '@/model/AddressInfo'
import { IUserAddressInfo, IAddressPrams, IAddressInfoList } from '@/model/UserAddressInfo'

export const useUserAddressStore = defineStore(UserAddress.Test, {
  state: () => {
    return {
      addressInfo: [] as IAddressInfo[],
      userAddressInfo: {} as IUserAddressInfo,
      address: [] as IAddressInfoList[]
    }
  },
  actions: {
    // get all address info
    async getAllAddressInfo(): Promise<void> {
      const res = await reqGetAllAddressInfo()
      if (res.code === 200) {
        const map = res.data.reduce((pre: { [x: number]: unknown }, cur: { id: number; children: never[] }) => {
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
        return Promise.reject(new Error('error'))
      }
    },
    // get user page address info
    async getUserPageAddressInfo(params: IAddressPrams): Promise<void> {
      const res = await reqUserPageAddressInfo(params)
      if (res.code === 200) {
        this.userAddressInfo = res.data
      } else {
        return Promise.reject(new Error('error'))
      }
    },
    // get user all user address info
    async getUserAddressInfo(): Promise<void> {
      const res = await reqUserAddressInfo()
      if (res.code === 200) {
        this.address = res.data
      } else {
        return Promise.reject(new Error('error'))
      }
    }
  },
  getters: {

  }
})
