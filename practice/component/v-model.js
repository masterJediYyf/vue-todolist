/* eslint-disable space-before-function-paren */
import Vue from 'vue';

// 组件内部实现双向绑定
const component = {
  model: {
    prop: 'value1',
    event: 'change'
  },
  props: [
    'value1'
  ],
  template: `
    <div>
      <input type="text" @input="handleInput" :value="value1"/>
    </div>
  `,
  methods: {
    handleInput(e) {
      this.$emit('change', e.target.value);
    }
  }
};

new Vue({
  components: {
    CompOne: component
  },
  data() {
    return {
      value: '123'
    }
  },
  el: '#root',
  template: `
    <div>
      <comp-one v-model="value"></comp-one>
    </div>
  `
});
