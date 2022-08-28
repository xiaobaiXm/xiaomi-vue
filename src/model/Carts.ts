/* eslint-disable camelcase */
export interface ICartUpdateAxiosResponse {
  code: number
  message: string
  data: {
    cart_sku_id: number
    createdAt: string
    id: number
    number: number
    product_id: number
    selected: boolean
    updatedAt: string
    user_id: number
  }
}
export interface ICartSelectAllAxiosResponse {
  code: number
  message: string
  data: {
    [key: number]: number
  }
}

export type ICreateOrUpdate = {
  productId: number
  cartSkuId : number
}

export type IUpdate = {
  number?: number
  selected?: boolean
}

export type ISelected = {
  selected : boolean
}
