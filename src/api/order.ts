import requests from '@/utils/requests'

import { IOrder } from '@/model/Order'

// 查询所有订单
export const reqGetAllUserOrderInfo = () => requests({
  url: '/order/',
  method: 'GET'
})

// 创建订单接口
export const reqCreateOrder = (order: IOrder) => requests({
  url: '/order/',
  method: 'POST',
  data: JSON.stringify(order)
})

// 根据订单号查询订单
export const reqQueryOrderByOrderNumber = (orderNumber: string) => requests({
  url: '/order/findByOrderNumber',
  method: 'POST',
  data: JSON.stringify(orderNumber)
})

// 查询订单状态
export const reqGetOrderStatusByOrderNumber = (orderNumber: string) => requests({
  url: '/order/statusByOrderNumber',
  method: 'POST',
  data: JSON.stringify(orderNumber)
})

// 修改订单状态
export const reqUpdateOrderStatus = (orderId: number, status: number) => requests({
  url: `/order/${orderId}`,
  method: 'PATCH',
  data: JSON.stringify(status)
})
