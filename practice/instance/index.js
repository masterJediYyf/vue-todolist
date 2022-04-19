import Vue from 'vue';
const print = console.log.bind(console);

const app = new Vue({
  // el: '#root',
  template: '<div ref="div">{{ text }} {{ obj.a }}</div>',
  data: {
    text: 0,
    obj: {} // 挂载在template上的 obj.a 不存在, 这是一个非响应式, 没有数据的双向绑定, 不会引起页面的刷新, 可以用 $forceUpdate进行强制刷新
  }
  // watch: {
  //   text: (newText, oldText) => {
  //     console.log(`${newText} : ${oldText}`)
  //   }
  // }
});

app.$mount('#root');

let i = 0;
setTimeout(() => {
  i++;
  // app.obj.a = i;
  app.$set(app.obj, 'a', i); // vue 会给 a 属性设置为 reactive
  // app.$delete()      // 再通过 $delete 将 a 属性彻底删除
  // app.$nextTick([callback])
  // app.$forceUpdate(); // 不推荐使用
}, 1000);

print(app.$data); // 实例上的 data 和 app.$data 是同一引用
// print(app.$props);
// print(app.$el);
// print(app.$options);

// app.$options.render = (h) => {
//   return h('div', {}, 'new render function');
// }

// print(app.$root === app);

// print(app.$children)
// print(app.$slots); // 插槽
// print(app.$scopedSlots);
// print(app.$refs);
// print(app.$isServer); // 服务端渲染用到的属性

// const unwatch = app.$watch('text', (newText, oldText) => {
//   print(`${newText} : ${oldText}`);
// })
// unwatch(); // 卸载监听器

// // 监听事件 只在当前 vue 实例上触发
// app.$on('test', (a, b) => {
//   print('test emited', a, b);
// })
// app.$emit('test', 1, 2);
