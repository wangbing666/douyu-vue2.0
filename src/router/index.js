import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import index from '@/views/Home/index'
import room from '@/components/room-detail'
import directory from '@/views/directory/index'
import login from '@/views/login/login'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
    	path:'/room/:id',
    	name:'room',
    	component:room
  	},
    {
      path:'/directory',
      name:'directory',
      component:directory
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
  ]
})
