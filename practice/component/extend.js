/* eslint-disable space-before-function-paren */
import Vue from 'vue';

const component = {
  template: `
    <div>
      <span @click="handleChange">{{ propOne }}</span>
      <span v-show="active">see me if</span>
    </div>
  `,
  props: {
    active: {
      type: Boolean
      // required: true // 表示该 prop 一定要传
    },
    propOne: Number
  },
  methods: {
    handleChange() {
      this.$emit('change')
    }
  },
  mounted() {
    console.log(this.$parent.$options.name);
  }
};

// // component 为可拓展组件
// const component2 = {
//   extends: component,
//   data() {
//     return '';
//   }
// }

// const CompVue = Vue.extend(component);

new Vue({
  name: 'Root',
  el: '#root',
  components: {
    Comp: component
  },
  template: `
    <comp></comp>
  `
})
