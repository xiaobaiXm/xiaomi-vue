export interface INavList {
  navTitle: string
  show: boolean
  navChildren: Array<{
    id: number
    productId: number
    name: string
    price: number
    img: string
  }>
}
