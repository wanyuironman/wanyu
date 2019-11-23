import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      beforeEnter(to,from,next){
          num++;
          console.log(num, 'beforeEnter','About');
          next();
      },
      component: About
    },
    {
      path: '/list',
      name: 'List',
      beforeEnter(to,from,next){
          num++;
          console.log(num, 'beforeEnter','List');
          next();
      },
      component: List
    },
  ]
})
