import Homeheader from './home/home-header.vue'
import Leftaside from './home/leftaside.vue'
import breadcrumb from './common/bread-crumb'
export default {
  install (Vue) {
    Vue.component('home-header', Homeheader)
    Vue.component('leftaside', Leftaside)
    Vue.component('bread-crumb', breadcrumb)
  }
}
