/* eslint-disable space-before-function-paren */
import Vue from 'vue';

new Vue({
  el: '#root',
  template: `
    <div>
      Name: {{ name }}
      <p>fullName: {{ fullName }}</p>
      <p>Name: <input type="text" v-model="name"/></p>
      <p>Obj.a: <input type="text" v-model="obj.a"/></p>
    </div>
  `,
  data: {
    firstName: 'Micheal',
    lastName: 'Jordan',
    fullName: '',
    obj: {
      a: '1321'
    }
  },
  // 放入一个静态的值, 不要去修改
  computed: {
    name: {
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set(name) {
        const names = name.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
      }
    }
  },
  // watch 更多时候用来监听数据变化 --> 后台发起请求, 显示数据这一块交给 computed 来做
  // 不要去修改
  watch: {
    firstName: {
      handler(newName, oldName) {
        this.fullName = `${newName} ${this.lastName}`;
      },
      immediate: true
    },
    'obj.a': {
      handler() {
        console.log('obj.a changed');
      },
      immediate: true
      // deep: true // 优化性能, 尽量给 false
    }
  }
})
