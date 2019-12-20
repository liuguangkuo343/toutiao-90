import homeheader from './home-header.vue'
import leftaside from './leftaside.vue'
export default {
  install (Vue) {
    Vue.component('homeheader', homeheader)
    Vue.component('leftaside', leftaside)
  }
}
