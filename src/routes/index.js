import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '@/views/Home/index.vue'
import Brochure from '@/views/Brochure/index.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/brochure',
    name: 'Brochure',
    component: Brochure,
  },
]

const router = new VueRouter({ mode: 'hash', routes })

export default router
