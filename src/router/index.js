import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' // 进度条样式
//  import HelloWorld from '@/components/HelloWorld'
//  const HelloWorld = () => import('@/components/HelloWorld')
const Msite = () => import('@/view/Msite')
const List = () => import('@/view/List')
const shopCar = () => import('@/view/shopCar')
const Select = () => import('@/view/Select')
const Index = () => import('@/view/index')
const ProjectOrArea = () => import('@/view/ProjectOrArea')
const slideShow = () => import('@/view/slideShow')
const login = () => import('@/view/login')
const particles = () => import('@/view/particles')
Vue.use(Router)
const whiteList = ['/login'] // 不重定向白名单
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Msite',
      component: Msite
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/slideShow',
      component: slideShow
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/shopCar',
      component: shopCar
    },
    {
      path: '/particles',
      component: particles
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/select',
      name: 'select',
      component: Select
    },
    {
      path: '/projectOrArea',
      component: ProjectOrArea
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  //  if (getToken()) {
  if (to.path === '/login') {
    next({
      path: '/'
    })
    NProgress.done()
  } else { // 实时拉取用户的信息
    next()
    /*  store.dispatch('GetUserInfo').then(res => {

      }).catch(err => {
        store.dispatch('FedLogOut').then(() => {
          Message.error('拉取用户信息失败，请重新登录！' + err)
          next({
            path: '/'
          })
        })
      }) */
  }
  // } else {
  /* if (whiteList.includes(to.path)) {
    next()
  } else {
    next('/login')
    NProgress.done()
  } */
})
router.afterEach(() => {
  NProgress.done() // 结束Progress
})

export default router
