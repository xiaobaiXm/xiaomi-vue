export interface IBanner {
  id: number,
  img: string,
  productId: number
}

export interface IHomeBannerAxiosResponse {
  code: number
  message: string
  data : IBanner[]
}
