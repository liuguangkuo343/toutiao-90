// 请求拦截器

// 封装axios
import axios from 'axios'
import router from '../router'
import { Message } from 'element-ui'
// 请求拦截 config 配置项

axios.interceptors.request.use(function (config) {
  let token = window.localStorage.getItem('user-token') // 获取token
  config.headers.Authorization = `Bearer ${token}` // 注入token
  return config // 返回后台操作
}, function (params) {

})

// 响应拦截器

axios.interceptors.response.use(function (response) {
//   成功执行函数  统一处理状态码

  return response.data ? response.data : {}
}, function name (error) {
// 失败时候执行
  let status = error.response.status // 获取请求失败状态码
  let message = ''
  switch (status) {
    case 400:
      message = '用户名或者密码不正确'
      break
    case 507:
      message = '服务器数据库异常'
      break
    case 401:
      // token过期
      window.localStorage.removeItem('user-token')
      router.push('/login')
      break
    case 403:
      message = '没有设置这条评论权限'
      break
    default:
      break
  }
  Message({ type: 'warning', message })
})
export default axios
