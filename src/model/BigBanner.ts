export interface IBigBanner {
  id: number
  productId: number
  img: string
}

export interface IHomeBigBannerAxiosResponse {
  code: number
  message: string
  data : IBigBanner[]
}
