import { defineStore } from 'pinia'
import { HeaderMain } from '@/enums/store/home_store_name'

import { reqGetBannerList, reqGetHeroListInfo, reqGetHeroBannerInfo } from '@/api/Home/index'

import { IBanner } from './Type/Banner'
import { IHeroBanner } from './Type/HeroBanner'
import { IHeroList } from './Type/HeroList'

export const useHeaderMainStore = defineStore(HeaderMain.Test, {
  state: () => {
    return {
      bannerList: [] as IBanner[],
      heroBanner: [] as IHeroBanner[],
      heroList: [] as IHeroList[]
    }
  },
  actions: {
    // 获取banner数据
    async getBannerList ():Promise<void> {
      const res = await reqGetBannerList()
      if (res.code === 200) {
        this.bannerList = res.data
      } else {
        return Promise.reject(new Error('false'))
      }
    },
    // 获取heroList数据
    async getHeroList ():Promise<void> {
      const res = await reqGetHeroListInfo()
      if (res.code === 200) {
        this.heroList = res.data
      } else {
        return Promise.reject(new Error('false'))
      }
    },
    // 获取heroBanner数据
    async getHeroBanner ():Promise<void> {
      const res = await reqGetHeroBannerInfo()
      if (res.code === 200) {
        this.heroBanner = res.data
      } else {
        return Promise.reject(new Error('flied'))
      }
    }
  },
  getters: {

  }
})
