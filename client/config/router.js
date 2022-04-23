import Router from 'vue-router';
import routes from './routes';

export default () => {
  return new Router({
    routes,
    mode: 'history',
    linkExactActiveClass: 'axact-active-link', // 路由被激活时候的class(精确匹配路径)
    linkActiveClass: 'active-link', // 路由被激活时候的class(模糊匹配路径)
    scrollBehavior(to, from, savedPosition) { // 返回访问过的页面是, 页面自动回到上次离开的位置
      if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 };
      }
    },
    fallback: true // 开启单页应用
    // parseQuery(query) {
    //   // TODO
    // },
    // stringifyQuery(obj) {
    //   // TODO
    // },
    // base: '/base/'
  });
}
