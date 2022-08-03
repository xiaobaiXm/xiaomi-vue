import requests from '@/utils/requests'

// navBer接口
export const reqGetHeaderNavBarList = () => requests({
  url: '/home/navBar',
  method: 'GET'
})

// nav接口
export const reqGetHeaderNavList = () => requests({
  url: '/home/nav',
  method: 'GET'
})

// banner接口
export const reqGetBannerList = () => requests({
  url: '/home/banner',
  method: 'GET'
})

// hero banner接口
export const reqGetHeroBannerInfo = () => requests({
  url: '/home/heroBanner',
  method: 'GET'
})

// 获取三级分类接口
export const reqGetCategoryList = () => requests({
  url: '/home/category',
  method: 'GET'
})

// 获取 大 banner 数据接口
export const reqGetBigBannerList = () => requests({
  url: '/home/bigBanner',
  method: 'GET'
})

// 获取手机数据
export const reqGetPhoneListInfo = () => requests({
  url: '/home/phone',
  method: 'GET'
})

// 获取主体区域内容接口
export const reqGetContainerList = () => requests({
  url: '/home/container',
  method: 'GET'
})

// hero list接口
export const reqGetHeroListInfo = () => requests({
  url: '/home/heroList',
  method: 'GET'
})

// video
export const reqGetVideoInfo = () => requests({
  url: '/home/homeVideo',
  method: 'GET'
})

// footer help
export const reqGetFooterHelpOInfo = () => requests({
  url: '/home/footerHelp',
  method: 'GET'
})

// footer nav
export const reqGetFooterNavInfo = () => requests({
  url: '/home/footerNav',
  method: 'GET'
})
