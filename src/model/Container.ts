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
  data : IContainer[]
}
