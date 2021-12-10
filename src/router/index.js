import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home.vue'
import Contents from '@/views/contents.vue'
import Setting from '@/views/setting.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/contents', component: Contents },
  { path: '/setting', component: Setting }
]

const router = new VueRouter({
  routes
})

export default router
