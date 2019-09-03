import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import api from './api/index.js'
Vue.prototype.$api = api

Vue.use(VueRouter)
Vue.use(ElementUI)

localStorage.setItem('username','zhangsan')
const RouterConfig = {
  mode: 'history',
  routes: Router,
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) =>  {
  window.document.title = to.meta.title;
  next();
})

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
