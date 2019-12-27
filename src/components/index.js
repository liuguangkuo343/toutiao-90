import Homeheader from './home/home-header.vue'
import Leftaside from './home/leftaside.vue'
import breadcrumb from './common/bread-crumb'
import { quillEditor } from 'vue-quill-editor' // quill编辑器的组件对象
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  install (Vue) {
    Vue.component('home-header', Homeheader) // 注册一个全局组件
    Vue.component('leftaside', Leftaside) // 注册地一个全局组件
    Vue.component('bread-crumb', breadcrumb) // 全局注册一个面包屑组件
    Vue.component('quill-editor', quillEditor) // 注册一个全局的富文本编辑器
  }
}
