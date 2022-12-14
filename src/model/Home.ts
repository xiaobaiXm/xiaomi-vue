/* eslint-disable camelcase */
export interface INavChild {
  id: number
  product_id: number
  name: string
  price: number
  img: string
}

export interface INavList {
  navTitle: string
  show: boolean
  navChildren: INavChild[]
}

export interface IHomeNavListAxiosResponse {
  code: number
  message: string
  data: INavList[]
}

export interface IHeroList {
  id: number,
  name: string,
  icon: string,
  path: string
}

export interface IHomeHeroListAxiosResponse {
  code: number
  message: string
  data: IHeroList[]
}

export interface IHeroBanner {
  id: number,
  productId: number
  img: string
}

export interface IHomeHeroBannerAxiosResponse {
  code: number
  message: string
  data: IHeroBanner[]
}

export interface IFooterNav {
  footerNavDt: string
  footerNavDd: Array<{
    id: number
    name: string
    path: string
  }>
}

export interface IHomeFooterNavAxiosResponse {
  code: number
  message: string
  data: IFooterNav[]
}

export interface IFooterHelp {
  id: number
  name: string
  path: string
  icon: string
}

export interface IHomeFooterHelpAxiosResponse {
  code: number
  message: string
  data: IFooterHelp[]
}

export interface IContainerChildLeft {
  [key: number]: {
    area?: string
    desc?: string
    group?: string
    id: number
    img: string
    mini?: boolean
    name?: string
    oldPrice?: number
    price?: number
    productId: number
  }
}

export interface IContainerChildRight {
  [key: number]: {
    groupChildren: Array<{
      desc?: string
      id: number
      img: string
      name?: string
      oldPrice?: number
      price?: number
      productId: number
    }>
    groupMini: Array<{
      id: number
      img: string
      name?: string
      price?: number
      productId: number
    }>
    groupTitle: string
  }
}

export interface IContainer {
  containerTitle: string
  containerChild: {
    left: IContainerChildLeft
    right: IContainerChildRight
  }
}

export interface IHomeContainerAxiosResponse {
  code: number
  message: string
  data: IContainer[]
}

export interface INavBarList {
  id: number,
  name: string
}

export interface IHomeNavBarListAxiosResponse {
  code: number
  message: string
  data: INavBarList[]
}

export interface ICategory {
  categoryTitle: string
  categoryChild: Array<{
    id: number,
    productId: number
    name: string
    img: string
    keyword: boolean
  }>
}

export interface IHomeCategoryAxiosResponse {
  code: number
  message: string
  data: ICategory[]
}

export interface IBanner {
  id: number,
  img: string,
  productId: number
}

export interface IHomeBannerAxiosResponse {
  code: number
  message: string
  data: IBanner[]
}

export interface IPhoneChildren {
  [key: number]: {
    desc?: number
    id: number
    img: string
    name?: string
    oldPrice?: number
    price?: number
    productId: number
  }
}

export interface IPhone {
  phoneArea: string
  phoneChild: IPhoneChildren
}

export interface IHomePhoneAxiosResponse {
  code: number
  message: string
  data: IPhone[]
}

export interface IBigBanner {
  id: number
  productId: number
  img: string
}

export interface IHomeBigBannerAxiosResponse {
  code: number
  message: string
  data: IBigBanner[]
}
