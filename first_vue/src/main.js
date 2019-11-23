// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';


Vue.use(iView);
Vue.config.productionTip = false;
// let num =0;
router.beforeEach((to,from ,next)=>{
  
    num++;
    console.log(num,'beforeEach');
    next();
});
router.beforeResolve((to, from, next) => {
  num++;
  console.log(num,'beforeResolve')
  next();
});
router.afterEach((to, from) =>{
  num++;
  console.log(num,'afterEach')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
