import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import HouseList from '@/views/HouseList'
import HouseDetail from '@/views/HouseDetail'

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/houselist',
      name: 'HouseList',
      component: HouseList
    },
    {
      path: '/houselist/:id',
      name: 'HouseDetail',
      component: HouseDetail
    }
  ]
})

router.afterEach((to, from) => {
  window.scrollTo(0,0)
})
export default router
