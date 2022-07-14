export interface INavList {
  navTitle: string
  navChildren: Array<{
    id: number
    productId: number
    name: string
    price: number
    img: string
  }>
}
