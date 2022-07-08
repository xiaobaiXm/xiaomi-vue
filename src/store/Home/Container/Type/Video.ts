export interface IVideoChild {
  [key: number]: {
    videoId: number
    videoName: string
    videoDesc: string
    videoImgUrl: string
  }
}

export interface IVideo {
  videoTitle: string
  videoChild: IVideoChild
}
