export interface ICategory {
  categoryTitle: string
  categoryChild: Array<{
    id: number,
    productId: number
    name: string
    img: string
    keyword: boolean
  }>
}
