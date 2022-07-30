import { defineStore } from 'pinia'
import { HeaderName } from '@/enums/store/home_store_name'

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
    // get nav bar info
    async getHeaderNavBarList ():Promise<void> {
      const res = await reqGetHeaderNavBarList()
      if (res.code === 200) {
        this.navBarList = res.data
      } else {
        return Promise.reject(new Error('filed'))
      }
    },

    // get nav info
    async  getHeaderNav ():Promise<void> {
      const res = await reqGetHeaderNavList()
      if (res.code === 200) {
        this.navList = res.data
      } else {
        return Promise.reject(new Error('filed'))
      }
    }
  },
  getters: {}
})
