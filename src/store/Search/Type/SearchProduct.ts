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

export interface ISearchProductInfo {
  list: {
    productId: number
    productName: string
    productInfo: IProductInfo
  }
  pageNo: number
  pageSize: number
  total: number
}
