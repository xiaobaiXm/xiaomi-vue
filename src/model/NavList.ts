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
  data : INavList[]
}
