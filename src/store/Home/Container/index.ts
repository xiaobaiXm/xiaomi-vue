import { defineStore } from 'pinia'
import { Container } from '@/enums/store/home_store_name'

import { reqGetContainerList, reqGetPhoneListInfo, reqGetVideoInfo } from '@/api/Home/index'

import { IContainer } from './Type/Container'
import { IPhone } from './Type/Phone'
import { IVideo } from './Type/Video'

export const useContainer = defineStore(Container.Test, {
  state: () => {
    return {
      containerList: [] as IContainer[],
      phoneList: [] as IPhone[],
      videoList: [] as IVideo[]
    }
  },
  actions: {
    // get container info
    async getContainerList (): Promise<void> {
      const res = await reqGetContainerList()
      if (res.code === 200) {
        this.containerList = res.data
      } else {
        return Promise.reject(new Error('filed'))
      }
    },
    // get phone info
    async getPhoneListInfo (): Promise<void> {
      const res = await reqGetPhoneListInfo()
      if (res.code === 200) {
        this.phoneList = res.data
      } else {
        return Promise.reject(new Error('failed'))
      }
    },
    // get video info
    async getVideoListInfo (): Promise<void> {
      const res = await reqGetVideoInfo()
      if (res.code === 200) {
        this.videoList = res.data
      } else {
        return Promise.reject(new Error('failed'))
      }
    }
  },
  getters: {
  }
})
