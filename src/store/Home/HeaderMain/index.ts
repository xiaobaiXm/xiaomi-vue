import { defineStore } from 'pinia'
import { HeaderMain } from '@/enums/store/Home/store_name'

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
      await reqGetBannerList().then((result) => {
        if (result.code === 200) {
          this.bannerList = result.data
        } else {
          return Promise.reject(new Error('filed'))
        }
      }, (err) => {
        return err.message
      })
    },
    // 获取heroList数据
    async getHeroList ():Promise<void> {
      await reqGetHeroListInfo().then((result) => {
        if (result.code === 200) {
          this.heroList = result.data
        } else {
          return Promise.reject(new Error('filed'))
        }
      }, err => {
        return err.message
      })
    },
    // 获取heroBanner数据
    async getHeroBanner ():Promise<void> {
      await reqGetHeroBannerInfo().then((result) => {
        if (result.code === 200) {
          this.heroBanner = result.data
        } else {
          return Promise.reject(new Error('filed'))
        }
      }, err => {
        return err.message
      })
    }
  },
  getters: {

  }
})
