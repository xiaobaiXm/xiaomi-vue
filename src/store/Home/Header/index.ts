import { defineStore } from 'pinia'
import { HeaderName } from '@/enums/store/Home/store_name'

import { reqGetHeaderNavList, reqGetHeaderNavBarList } from '@/api/Home/index'

import { INavBarList } from './Type/NavBarList'
import { INavList } from './Type/NavList'

export const useHeaderStore = defineStore(HeaderName.Test, {
  state: () => {
    return {
      navBarList: [] as INavBarList[],
      navList: [] as INavList[]
    }
  },
  actions: {
    // 获取nav bar数据
    async getHeaderNavBarList ():Promise<void> {
      await reqGetHeaderNavBarList().then((result) => {
        this.navBarList = result.data
      }, (err) => {
        return err.message
      })
    },

    // 获取Nav数据
    async  getHeaderNav ():Promise<void> {
      await reqGetHeaderNavList().then((result) => {
        this.navList = result.data
      }, err => {
        return err.message
      })
    }
  },
  getters: {

  }
})
