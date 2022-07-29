import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const requests = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' }
})

// 请求拦截器
requests.interceptors.request.use((config:AxiosRequestConfig) => {
  return config
}, (error) => {
  // 错误抛到业务代码
  error.data = {}
  error.data.msg = '服务器异常，请联系管理员！'
  return Promise.resolve(error)
})

// 响应拦截器
requests.interceptors.response.use((response:AxiosResponse) => {
  return response.data
}, (error) => {
  // 错误抛到业务代码
  error.data = {}
  error.data.msg = '请求超时或服务器异常，请检查网络或联系管理员！'
  return Promise.resolve(error)
})

export default requests
