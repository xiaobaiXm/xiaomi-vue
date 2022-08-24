import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

import { getToken } from './token'

const requests = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
})

// 请求拦截器
requests.interceptors.request.use((config: AxiosRequestConfig) => {
  if (getToken()) {
    if (config && config?.headers) {
      config.headers.token = `Bearer ${getToken()}`
    }
  }
  return config
}, (error) => {
  error.data = {}
  error.data.msg = '服务器异常，请联系管理员！'
  return Promise.resolve(error)
})

// 响应拦截器
requests.interceptors.response.use((response: AxiosResponse) => {
  return response.data
}, (error) => {
  error.data = {}
  error.data.msg = '请求超时或服务器异常，请检查网络或联系管理员！'
  return Promise.resolve(error)
})

export default requests
