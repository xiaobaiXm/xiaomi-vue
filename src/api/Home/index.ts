import requests from '@/utils/requests'

// navBer接口
export const reqGetHeaderNavBarList = () => requests({
  url: '/headernav',
  method: 'GET'
})

// nav接口
export const reqGetHeaderNavList = () => requests({
  url: '/nav',
  method: 'GET'
})

// banner接口
export const reqGetBannerList = () => requests({
  url: '/banner',
  method: 'GET'
})

// bannerList接口
export const reqGetPromoList = () => requests({
  url: '/bannerList',
  method: 'GET'
})

// 获取三级分类接口
export const reqGetTypeNavList = () => requests({
  url: '/typeNav',
  method: 'GET'
})

// 获取手机数据
export const reqGetPhoneListInfo = () => requests({
  url: '/home/phone',
  method: 'GET'
})

// 获取主体区域内容接口
export const reqGetContainerList = () => requests({
  url: '/container',
  method: 'GET'
})

// channel_list接口
export const reqGetChannelListInfo = () => requests({
  url: '/channelList',
  method: 'GET'
})

// video
export const reqGetVideoInfo = () => requests({
  url: '/home/homeVideo',
  method: 'GET'
})
