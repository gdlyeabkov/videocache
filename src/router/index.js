import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Settings from '../views/Settings.vue'
import Channel from '../views/Channel.vue'
import Studio from '../views/Studio.vue'
import Video from '../views/Video.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/channel',
    name: 'Channel',
    component: Channel
  },
  {
    path: '/studio',
    name: 'Studio',
    component: Studio
  },
  {
    path: '/video',
    name: 'Video',
    component: Video
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
