import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Post from "@/components/Post";


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header,
    },
    {
      path:'/post/:id',
      name:'Post',
      component:Post
    }
  ]
})
