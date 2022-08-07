/* eslint-disable camelcase */
export interface IAddressInfoList {
  id: number
  consignee: string
  phone: number
  provinces: string
  city: string
  area: string
  address: string
  address_detail: string
  remarks: string
  is_default: boolean
}

export interface IUserAddressInfo {
  pageNo: number
  pageSize: number
  total: number
  list: IAddressInfoList[]
}

export interface IAddressPrams {
  pageNo: number
  pageSize: number
}
