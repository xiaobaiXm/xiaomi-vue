
export interface IPhoneChildren {
  [key: number]: Array<{
    [key: number]: {
      desc?: number
      id: number
      img: string
      name?: string
      oldPrice?: number
      price?: number
      productId: number
    }
  }>
}

export interface IPhone {
  phoneTitle: string
  phoneChild: Array<IPhoneChildren>
}
