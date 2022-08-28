/* eslint-disable camelcase */
interface ISkuInfo {
  color: string
  id: number
  img: string
  price: number
  version: string
}

interface IProductInfo {
  id: number
  name: string
}

export interface ICartInfo {
  id: number
  number: number
  selected: boolean
  cart_product_info: IProductInfo
  cart_sku_info: ISkuInfo
}

export interface ICartAllAxiosResponse {
  code: number
  message: string
  data: {
    list: ICartInfo[]
    count: number
  }
}
