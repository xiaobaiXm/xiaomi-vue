export interface IPhoneChildren {
  [key: number]: {
    desc?: number
    id: number
    img: string
    name?: string
    oldPrice?: number
    price?: number
    productId: number
  }
}

export interface IPhone {
  phoneArea: string
  phoneChild: IPhoneChildren
}
