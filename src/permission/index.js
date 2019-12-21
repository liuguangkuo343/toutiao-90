import router from '../router'

// 路由拦截器

// 前置守卫
router.beforeEach(function (to, from, next) {
  // 有token 可以过 没token不让过
  if (to.path.startsWith('/home')) {
    //   在这个范围查看是否存在token
    let token = window.localStorage.getItem('user-token')
    debugger
    if (token) {
      next() // 放过
    } else {
      next('/login')
    }
  } else {
    next() // 放过
  }
})
