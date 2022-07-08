import { defineStore } from 'pinia'
import { HeaderMain } from '@/enums/store/Home/store_name'

import { reqGetBannerList, reqGetPromoList, reqGetChannelListInfo } from '@/api/Home/index'

import { IBanner } from './Type/Banner'
import { IBannerList } from './Type/BannerList'
import { IChannelList } from './Type/ChannelList'

export const useHeaderMainStore = defineStore(HeaderMain.Test, {
  state: () => {
    return {
      bannerList: [] as IBanner[],
      bannerPromo: [] as IBannerList[],
      channelList: [] as IChannelList[]
    }
  },
  actions: {
    // 获取banner数据
    async getBannerList ():Promise<void> {
      await reqGetBannerList().then((result) => {
        this.bannerList = result.data
      }, (err) => {
        return err.message
      })
    },
    // 获取promo数据
    async getPromoList ():Promise<void> {
      await reqGetPromoList().then((result) => {
        this.bannerPromo = result.data
      }, err => {
        return err.message
      })
    },
    // 获取ChannelList数据
    async getChannelList ():Promise<void> {
      await reqGetChannelListInfo().then((result) => {
        this.channelList = result.data
      }, err => {
        return err.message
      })
    }
  },
  getters: {

  }
})
