import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant, { Lazyload } from 'vant'
import 'vant/lib/index.less'

Vue.use(Vant)
Vue.use(Lazyload)
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
