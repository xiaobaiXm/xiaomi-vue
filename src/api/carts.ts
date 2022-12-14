import requests from '@/utils/requests'
import { ICartAllAxiosResponse } from '@/model/CartsAllInfo'
import { ICreateOrUpdate, IUpdate, ISelected, ICartUpdateAxiosResponse, ICartSelectAllAxiosResponse } from '@/model/Carts'
// 用户全部购物车接口
export const reqGetAllUserShopCartInfo = (): Promise<ICartAllAxiosResponse> => requests({
  url: '/cart/',
  method: 'GET'
})

// 创建、更新用户购物车接口
export const reqCreateOrUpdateUserCartInfo = (cartInfo: ICreateOrUpdate) => requests({
  url: '/cart/',
  method: 'POST',
  data: JSON.stringify(cartInfo)
})

// 更新用户购物车接口
export const reqUpdateUserCartInfo = (id: number, cartInfo: IUpdate): Promise<ICartUpdateAxiosResponse> => requests({
  url: `/cart/${id}`,
  method: 'PATCH',
  data: JSON.stringify(cartInfo)
})

// 删除用户购物车接口
export const reqRemoveUserShopCartInfo = (ids: number[]) => requests({
  url: '/cart/',
  method: 'DELETE',
  data: { ids }
})

// 全选用户购物车接口
export const reqSelectAllUserCart = (selected: ISelected): Promise<ICartSelectAllAxiosResponse> => requests({
  url: '/cart/selectAll',
  method: 'POST',
  data: JSON.stringify(selected)
})

// 获取用户选中产品
export const reqUserSelectProductInfo = (): Promise<ICartAllAxiosResponse> => requests({
  url: '/cart/select',
  method: 'GET'
})

// 删除已下单产品
export const reqUserSuccessfulOrderProductInfo = () => requests({
  url: '/cart/success',
  method: 'POST'
})
