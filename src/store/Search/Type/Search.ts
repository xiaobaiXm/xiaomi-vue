export interface ISearch {
  keyword: string
  order: string
  filterTag: Array<{
    promotion: boolean
    installment: boolean
    available:boolean
  }>
  pageNo: number
  pageSize: number
}
