import requests from '@/utils/requests'

import { IHomeNavBarListAxiosResponse } from '@/model/NavBarList'
import { IHomeNavListAxiosResponse } from '@/model/NavList'
import { IHomeBannerAxiosResponse } from '@/model/Banner'
import { IHomeHeroBannerAxiosResponse } from '@/model/HeroBanner'
import { IHomeHeroListAxiosResponse } from '@/model/HeroList'
import { IHomeCategoryAxiosResponse } from '@/model/Category'
import { IHomeBigBannerAxiosResponse } from '@/model/BigBanner'
import { IHomePhoneAxiosResponse } from '@/model/Phone'
import { IHomeContainerAxiosResponse } from '@/model/Container'
import { IHomeVideoAxiosResponse } from '@/model/Video'
import { IHomeFooterHelpAxiosResponse } from '@/model/FooterHelp'
import { IHomeFooterNavAxiosResponse } from '@/model/FooterNav'

// navBar接口
export const reqGetHeaderNavBarList = ():Promise<IHomeNavBarListAxiosResponse> => requests({
  url: '/home/navBar',
  method: 'GET'
})

// nav接口
export const reqGetHeaderNavList = ():Promise<IHomeNavListAxiosResponse> => requests({
  url: '/home/nav',
  method: 'GET'
})

// banner接口
export const reqGetBannerList = ():Promise<IHomeBannerAxiosResponse> => requests({
  url: '/home/banner',
  method: 'GET'
})

// hero banner接口
export const reqGetHeroBannerInfo = ():Promise<IHomeHeroBannerAxiosResponse> => requests({
  url: '/home/heroBanner',
  method: 'GET'
})

// hero list接口
export const reqGetHeroListInfo = ():Promise<IHomeHeroListAxiosResponse> => requests({
  url: '/home/heroList',
  method: 'GET'
})

// 获取三级分类接口
export const reqGetCategoryList = ():Promise<IHomeCategoryAxiosResponse> => requests({
  url: '/home/category',
  method: 'GET'
})

// 获取 大banner 数据接口
export const reqGetBigBannerList = ():Promise<IHomeBigBannerAxiosResponse> => requests({
  url: '/home/bigBanner',
  method: 'GET'
})

// 获取手机数据接口
export const reqGetPhoneListInfo = ():Promise<IHomePhoneAxiosResponse> => requests({
  url: '/home/phone',
  method: 'GET'
})

// 获取主体区域内容接口
export const reqGetContainerList = ():Promise<IHomeContainerAxiosResponse> => requests({
  url: '/home/container',
  method: 'GET'
})

// video
export const reqGetVideoInfo = ():Promise<IHomeVideoAxiosResponse> => requests({
  url: '/home/homeVideo',
  method: 'GET'
})

// footer help
export const reqGetFooterHelpOInfo = ():Promise<IHomeFooterHelpAxiosResponse> => requests({
  url: '/home/footerHelp',
  method: 'GET'
})

// footer nav
export const reqGetFooterNavInfo = ():Promise<IHomeFooterNavAxiosResponse> => requests({
  url: '/home/footerNav',
  method: 'GET'
})
