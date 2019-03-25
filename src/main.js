import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import router from './router'
import { MyPlugin } from './plugins/common'
import everPagination from './plugins/pagination'
import everBreadCrumb from './plugins/everbreadcrumb'
import 'element-ui/lib/theme-chalk/index.css'
require('./plugins/funcform')
Vue.use(MyPlugin)
Vue.use(Element)
Vue.component('everPagination', everPagination)
Vue.component('everBreadCrumb', everBreadCrumb)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
