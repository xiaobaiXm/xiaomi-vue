export interface IContainerCChild {
  containerTitle: string
  containerChild: {
    [key: number]: {
      containerId: number
      containerName: string
      containerDesc: string
      containerPrice: string
      containerOldPrice: string
      containerImgUrl: string
      containerGroup: string
      containerMini: number
      containerArea: string
    }
  }
}

export interface IContainerChild {
  [key: number]: IContainerCChild
}

export interface RootObject {
  [key: number]: IContainerChild
}

export interface IContainer {
  containerTitle: string
  containerChild: RootObject
}
