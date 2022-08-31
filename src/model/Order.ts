import { ICartInfo } from './CartsAllInfo'

export type IOrder = {
  addressId: number
  productInfo: ICartInfo[]
  freight: number
  total: number
  totalPrice: number
}
