// import Todo from '../views/todo/todo.vue';
// import Login from '../views/login/login.vue';

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app/:id',
    // path: '/app',
    // props: (route) => ({ id: route.query.b }),
    props: true,
    component: () => import('../views/todo/todo.vue'),
    // components: {
    //   default: Todo,
    //   a: Login
    // },
    name: 'app',
    meta: { // 页面的源信息, 有利于SEO
      title: 'this is app',
      description: 'find app so quick'
    },
    beforeEnter(to, from, next) {
      console.log('app route before enter');
      next();
    }
    // 子路由数组
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue')
    // components: {
    //   default: Login,
    //   a: Todo
    // }
  }
]
