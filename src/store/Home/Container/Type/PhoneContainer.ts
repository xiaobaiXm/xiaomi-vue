export interface IPhone {
  containerTitle: string
  containerChild: Array<{
    containerId?: number,
    containerName?: string,
    containerDesc?: string,
    containerPrice?: number,
    containerOldPrice?: number,
    containerImgUrl?: string,
    containerGroup?: string,
  }>
}
