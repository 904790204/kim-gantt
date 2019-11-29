import axios from 'axios'

const service = axios.create({
  timeout: 60000,
  responseType: "json",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  }
})
// 请求拦截（配置发送请求的信息）
service.interceptors.request.use(function (config) {
  
  return config
}, function (error) {

  return Promise.reject(error)
})

// 响应拦截（配置请求回来的信息）
service.interceptors.response.use(function (response) {
  
  return response
}, function (error) {
  
  return Promise.reject(error)
})

export default service