import Vue from 'vue'
import Router from 'vue-router'
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
const demo = () => import('@/view/demo')
Vue.use(Router)

export default new Router({
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
      path: '/demo',
      component: demo
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
