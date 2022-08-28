import { defineStore } from 'pinia'
import { Container } from '@/enums/store/home_store_name'

import { reqGetBigBannerList, reqGetContainerList, reqGetPhoneListInfo, reqGetVideoInfo } from '@/api/Home/index'

import { IBigBanner } from '@/model/BigBanner'
import { IContainer } from '@/model/Container'
import { IPhone } from '@/model/Phone'
import { IVideo } from '@/model/Video'

export const useContainerStore = defineStore(Container.Test, {
  state: () => {
    return {
      bigBannerList: [] as IBigBanner[],
      containerList: [] as IContainer[],
      phoneList: [] as IPhone[],
      videoList: [] as IVideo[]
    }
  },
  actions: {
    // get big banner info
    async getBigBannerInfo () {
      const res = await reqGetBigBannerList()
      if (res.code === 200) {
        this.bigBannerList = res.data
      } else {
        return Promise.reject(new Error('false'))
      }
    },
    // get container info
    async getContainerList (): Promise<void> {
      const res = await reqGetContainerList()
      if (res.code === 200) {
        this.containerList = res.data
      } else {
        return Promise.reject(new Error('false'))
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
    firstContainer ():IContainer[] {
      return this.containerList.slice(0, 4)
    },
    contentContainer ():IContainer[] {
      return this.containerList.slice(4, 7)
    },
    lastContainer (): IContainer[] {
      return this.containerList.slice(7, 8)
    }
  }
})
