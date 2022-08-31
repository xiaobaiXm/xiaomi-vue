export interface IProductInfo {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
  infoId: number
  price: number
  oldPrice?: number
  img: string
  version: string
  isCheck: boolean
}

interface IListInfo {
  productId: number
  productName: string
  productInfo: IProductInfo[]
}

export interface ISearchProductInfo {
  list: IListInfo[]
  pageNo: number
  pageSize: number
  total: number
}

export interface ISearchProductAxiosResponse {
  code: number
  message: string
  data : ISearchProductInfo
}
