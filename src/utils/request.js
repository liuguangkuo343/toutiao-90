// 封装axios
import axios from 'axios'
// 请求拦截 config 配置项
let token = window.localStorage.getItem('user-token') // 取token
axios.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${token}` // 注入token
  return config // 返回后台操作
}, function (params) {

})
export default axios
