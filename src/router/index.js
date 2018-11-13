import Vue from 'vue'
import Router from 'vue-router'
//  import HelloWorld from '@/components/HelloWorld'
//  const HelloWorld = () => import('@/components/HelloWorld')
const Msite = () => import('@/view/Msite')
const List = () => import('@/view/List')
const shopCar = () => import('@/view/shopCar')
const Select = () => import('@/view/Select')
const Index = () => import('@/view/index')
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
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/shopCar',
      name: 'shopCar',
      component: shopCar
    },
    {
      path: '/select',
      name: 'select',
      component: Select
    }
  ]
})
