import { defineStore } from 'pinia'
import { Home } from '@/enums/store/home_store_name'
import {
  reqGetHeaderNavList,
  reqGetHeaderNavBarList,
  reqGetBannerList,
  reqGetHeroListInfo,
  reqGetHeroBannerInfo,
  reqGetBigBannerList,
  reqGetContainerList,
  reqGetPhoneListInfo,
  reqGetVideoInfo,
  reqGetCategoryList,
  reqGetFooterHelpOInfo,
  reqGetFooterNavInfo
} from '@/api/home'
import {
  INavBarList,
  INavList,
  IBanner,
  IHeroList,
  IHeroBanner,
  IBigBanner,
  IContainer,
  IPhone,
  ICategory,
  IFooterHelp,
  IFooterNav
} from '@/model/Home'
import { IVideo } from '@/model/Video'
export const useHomeStore = defineStore(Home.Test, {
  state: () => {
    return {
      navBarList: [] as INavBarList[],
      navList: [] as INavList[],
      bigBannerList: [] as IBigBanner[],
      containerList: [] as IContainer[],
      phoneList: [] as IPhone[],
      videoList: [] as IVideo[],
      bannerList: [] as IBanner[],
      heroBanner: [] as IHeroBanner[],
      heroList: [] as IHeroList[],
      category: [] as ICategory[],
      footerHelpList: [] as IFooterHelp[],
      footerNavList: [] as IFooterNav[]
    }
  },
  actions: {
    // get nav bar info
    async getHeaderNavBarList(): Promise<void> {
      const res = await reqGetHeaderNavBarList()
      if (res.code === 200) {
        this.navBarList = res.data
      } else {
        return Promise.reject(new Error('error'))
      }
    },

    // get nav info
    async getHeaderNav(): Promise<void> {
      const res = await reqGetHeaderNavList()
      if (res.code === 200) {
        this.navList = res.data
      } else {
        return Promise.reject(new Error('error'))
      }
    },
    // get banner info
    async getBannerList(): Promise<void> {
      const res = await reqGetBannerList()
      if (res.code === 200) {
        this.bannerList = res.data
      } else {
        return Promise.reject(new Error('error'))
      }
    },
    // get heroList info
    async getHeroList(): Promise<void> {
      const res = await reqGetHeroListInfo()
      if (res.code === 200) {
        this.heroList = res.data
      } else {
        return Promise.reject(new Error('error'))
      }
    },
    // get heroBanner info
    async getHeroBanner(): Promise<void> {
      const res = await reqGetHeroBannerInfo()
      if (res.code === 200) {
        this.heroBanner = res.data
      } else {
        return Promise.reject(new Error('error'))
      }
    },
    // get big banner info
    async getBigBannerInfo() {
      const res = await reqGetBigBannerList()
      if (res.code === 200) {
        this.bigBannerList = res.data
      } else {
        return Promise.reject(new Error('error'))
      }
    },
    // get container info
    async getContainerList(): Promise<void> {
      const res = await reqGetContainerList()
      if (res.code === 200) {
        this.containerList = res.data
      } else {
        return Promise.reject(new Error('error'))
      }
    },
    // get phone info
    async getPhoneListInfo(): Promise<void> {
      const res = await reqGetPhoneListInfo()
      if (res.code === 200) {
        this.phoneList = res.data
      } else {
        return Promise.reject(new Error('error'))
      }
    },
    // get video info
    async getVideoListInfo(): Promise<void> {
      const res = await reqGetVideoInfo()
      if (res.code === 200) {
        this.videoList = res.data
      } else {
        return Promise.reject(new Error('error'))
      }
    },
    // get category info
    async getCategoryList(): Promise<void> {
      const res = await reqGetCategoryList()
      if (res.code === 200) {
        this.category = res.data
      } else {
        return Promise.reject(new Error('error'))
      }
    },
    // get footer help info
    async getFooterHelpInfo(): Promise<void> {
      const res = await reqGetFooterHelpOInfo()
      if (res.code === 200) {
        this.footerHelpList = res.data
      } else {
        return Promise.reject(new Error('error'))
      }
    },
    // get footer nav info
    async getFooterNavInfo(): Promise<void> {
      const res = await reqGetFooterNavInfo()
      if (res.code === 200) {
        this.footerNavList = res.data
      } else {
        return Promise.reject(new Error('error'))
      }
    }
  },
  getters: {
    firstContainer(): IContainer[] {
      return this.containerList.slice(0, 4)
    },
    contentContainer(): IContainer[] {
      return this.containerList.slice(4, 7)
    },
    lastContainer(): IContainer[] {
      return this.containerList.slice(7, 8)
    }
  }
})
