import { defineStore } from 'pinia'
import { Footer } from '@/enums/store/Home/store_name'

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
      await reqGetFooterHelpOInfo().then(result => {
        if (result.code === 200) {
          this.footerHelpList = result.data
        } else {
          return Promise.reject(new Error('filed'))
        }
      }).catch(err => {
        return err.message
      })
    },
    // get footer nav info
    async getFooterNavInfo (): Promise<void> {
      await reqGetFooterNavInfo().then(result => {
        if (result.code === 200) {
          this.footerNavList = result.data
        } else {
          return Promise.reject(new Error('filed'))
        }
      }).catch(err => { return err.message })
    }
  },
  getters: {}
})
