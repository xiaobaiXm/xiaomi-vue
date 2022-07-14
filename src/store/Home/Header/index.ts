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
    // get nav bar info
    async getHeaderNavBarList ():Promise<void> {
      await reqGetHeaderNavBarList().then((result) => {
        if (result.code === 200) {
          this.navBarList = result.data
        } else {
          return Promise.reject(new Error('filed'))
        }
      }, (err) => {
        return err.message
      })
    },

    // get nav info
    async  getHeaderNav ():Promise<void> {
      await reqGetHeaderNavList().then((result) => {
        if (result.code === 200) {
          this.navList = result.data
        } else {
          return Promise.reject(new Error('filed'))
        }
      }, err => {
        return err.message
      })
    }
  },
  getters: {}
})
