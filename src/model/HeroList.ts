export interface IHeroList {
  id: number,
  name: string,
  icon: string,
  path: string
}

export interface IHomeHeroListAxiosResponse {
  code: number
  message: string
  data : IHeroList[]
}
