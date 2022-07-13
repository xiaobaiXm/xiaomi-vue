export interface IVideoInfo {
  [key: number]: {
    id: number
    title: string
    img: string
    desc: string
    link: string
  }
}

export interface IVideo {
  videoInfo: IVideoInfo
}
