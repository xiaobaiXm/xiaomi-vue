export interface INavBarList {
  id: number,
  name: string
}

export interface IHomeNavBarListAxiosResponse {
  code: number
  message: string
  data : INavBarList[]
}
