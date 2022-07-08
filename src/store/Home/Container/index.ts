import { defineStore } from 'pinia'
import { Container } from '@/enums/store/Home/store_name'

import { reqGetContainerList, reqGetPhoneListInfo, reqGetVideoInfo } from '@/api/Home/index'

import { IContainer } from './Type/Container'
import { IPhone } from './Type/PhoneContainer'
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
    async getContainerList ():Promise<void> {
      await reqGetContainerList().then((result) => {
        this.containerList = result.data
      }, err => {
        return err.message
      })
    },
    // get phone info
    async getPhoneListInfo ():Promise<void> {
      await reqGetPhoneListInfo().then((result) => {
        this.phoneList = result.data
      }, err => {
        return err.message
      })
    },
    // get video info
    async getVideoListInfo ():Promise<void> {
      await reqGetVideoInfo().then((result) => {
        this.videoList = result.data
      }, err => {
        return err.message
      })
    }
  },
  getters: {
    containerChild: store => {
      return store.phoneList[0]?.containerChild || []
    }
  }
})
