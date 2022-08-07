export type Address = {
  provinces: string
  city: string
  area: string
  address: string
}

export type IAddressInfoFlag = {
  provinces: boolean
  city: boolean
  area: boolean
  address: boolean
}

export interface IPage {
  pageNo: number
  pageSize : number
}
