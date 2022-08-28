export interface IAddress {
  id: number
  pid: number
  deep: number
  name: string
}

export interface IArea {
  id: number
  pid: number
  deep: number
  name: string
  children: IAddress[]
}

export interface ICity {
  id: number
  pid: number
  deep: number
  name: string
  children: IArea[]
}

export interface IAddressInfo {
  id: number
  pid: number
  deep: number
  name: string
  children: ICity[]
}
