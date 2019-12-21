// 请求拦截器

// 封装axios
import axios from 'axios'
// 请求拦截 config 配置项
let token = window.localStorage.getItem('user-token') // 取token
axios.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${token}` // 注入token
  return config // 返回后台操作
}, function (params) {

})

// 响应拦截器

axios.interceptors.response.use(function (response) {
//   成功执行函数  统一处理状态码

  return response.data ? response.data : {}
}, function name (params) {
// 失败时候执行
})
export default axios
