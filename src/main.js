// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 初始化样式
require('@/assets/css/common.css')

/** axios **/
import axios from '@/public/http.js'
Vue.prototype.axios = axios

/** localStorage存储插件 **/
import local from '@/public/local'
Vue.use(local)

// iview UI框架
import iView from 'iview'
import 'iview/dist/styles/iview.css'    // 使用 CSS
Vue.use(iView)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
