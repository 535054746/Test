
const router = [
  {
    path: '/HelloWorld',
    meta: {
        title: '商品列表'
    },
    component: (resolve) => require(['./components/HelloWorld.vue'], resolve)
  },
  {
    path: '/list',
    meta: {
        title: '列表'
    },
    component: (resolve) => require(['./components/list.vue'], resolve)
  },
  {
    path: '*',
    redirect: '/HelloWorld'
  }
]
export default router