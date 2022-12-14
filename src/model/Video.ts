export interface IVideo {
  id: number;
  title: string;
  img: string;
  desc: string;
  link: string;
}

export interface IVideoAxiosResponse {
  code: number
  message: string
  data: IVideo[]
}
