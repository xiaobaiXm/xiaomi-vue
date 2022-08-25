import requests from '@/utils/requests'

import { IProductId } from './Type'

// 获取商品详情接口
export const reqGetProductDetailInfo = (productId:IProductId) => requests({
  url: '/detail/',
  method: 'POST',
  data: JSON.stringify(productId)
})
