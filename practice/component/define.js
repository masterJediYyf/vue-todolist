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
      type: Boolean,
      required: true // 表示该 prop 一定要传
    },
    propOne: Number
  },
  methods: {
    handleChange() {
      this.$emit('change')
    }
  }
};

new Vue({
  el: '#root',
  components: {
    CompOne: component
  },
  data: {
    prop: 1
  },
  methods: {
    handleChange() {
      this.prop += 1;
    }
  },
  mounted() {
    console.log(this.$refs.comp1);
  },
  template: `
    <div>
      <comp-one ref="comp1" :active="true" :prop-one="prop" @change="handleChange"></comp-one>
      <comp-one :active="true"></comp-one>
    </div>
  `
});
