export interface IFooterHelp {
  id: number
  name: string
  path: string
  icon: string
}

export interface IHomeFooterHelpAxiosResponse {
  code: number
  message: string
  data : IFooterHelp[]
}
