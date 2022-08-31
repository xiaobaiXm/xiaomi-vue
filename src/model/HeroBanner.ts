export interface IHeroBanner {
  id: number,
  productId: number
  img: string
}

export interface IHomeHeroBannerAxiosResponse {
  code: number
  message: string
  data : IHeroBanner[]
}
