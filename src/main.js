import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import api from './api/index.js'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.prototype.$api = api

Vue.use(Vuex)
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

const store = new Vuex.Store({
  state: {
    count: 0,
    list : [1, 2, 3, 4, 6, 11, 43, 25]
  },
  getters: {
    list: state=> {
      return state.list.filter(item=> item >10)
    }
  },
  mutations: {
    countAdd(state,n) {
      n = n || 2
      state.count += n
      if(state.count > 6) {
        console.log('1');
        state.count = 6
      }
      
    }
  }
})


Vue.config.productionTip = false

new Vue({
  router: router,
  store,
  render: h => h(App),
}).$mount('#app')
