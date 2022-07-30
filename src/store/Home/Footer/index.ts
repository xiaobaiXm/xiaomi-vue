import { defineStore } from 'pinia'
import { Footer } from '@/enums/store/home_store_name'

import { reqGetFooterHelpOInfo, reqGetFooterNavInfo } from '@/api/Home/index'

import { FooterHelp } from './Type/FooterHelp'
import { IFooterNav } from './Type/FooterNav'

export const useFooter = defineStore(Footer.Test, {
  state: () => {
    return {
      footerHelpList: [] as FooterHelp[],
      footerNavList: [] as IFooterNav[]
    }
  },
  actions: {
    // get footer help info
    async getFooterHelpInfo (): Promise<void> {
      const res = await reqGetFooterHelpOInfo()
      if (res.code === 200) {
        this.footerHelpList = res.data
      } else {
        return Promise.reject(new Error('filed'))
      }
    },
    // get footer nav info
    async getFooterNavInfo (): Promise<void> {
      const res = await reqGetFooterNavInfo()
      if (res.code === 200) {
        this.footerNavList = res.data
      } else {
        return Promise.reject(new Error('filed'))
      }
    }
  },
  getters: {}
})
