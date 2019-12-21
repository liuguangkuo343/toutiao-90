import Homeheader from './home/home-header.vue'
import Leftaside from './home/leftaside.vue'
// import breadCrumb from './common/bread-crumb'
export default {
  install (Vue) {
    Vue.component('home-header', Homeheader)
    Vue.component('leftaside', Leftaside)
    // Vue.breadCrumb('bread-crumb', breadCrumb) // 全局注册面包屑
  }
}
