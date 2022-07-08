export interface ITypeNav {
  categoryName: string
  categoryChild: Array<{
    categoryId: number
    categoryName: string
    categoryImgUrl: string
  }>
}
