export interface ICategory {
  categoryName: string
  categoryChild: Array<{
    categoryId: number
    categoryName: string
    categoryImgUrl: string
  }>
}
