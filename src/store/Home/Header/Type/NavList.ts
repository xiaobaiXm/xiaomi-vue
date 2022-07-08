export interface INavList {
  navId: number;
  navTitle: string;
  navChild: Array<{
    navId: number,
    navName: string,
    navPrice: number,
    navImgUrl: string,
  }>
}
