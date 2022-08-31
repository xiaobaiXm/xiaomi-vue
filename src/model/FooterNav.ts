export interface IFooterNav {
  footerNavDt: string
  footerNavDd: Array<{
    id: number
    name: string
    path: string
  }>
}

export interface IHomeFooterNavAxiosResponse {
  code: number
  message: string
  data : IFooterNav[]
}
