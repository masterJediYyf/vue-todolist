/* eslint-disable space-before-function-paren */
import Vue from 'vue';

const childComponent = {
  template: `<div>child compoennt: {{ data.value }}</div>`,
  inject: ['papa', 'value', 'data'],
  mounted() {
    // console.log(this.papa, this.value);
  }
}

// 剧名插槽
const component = {
  name: 'comp',
  components: {
    childComponent
  },
  // template: `
  //   <div :style="style">
  //     <div class="header">
  //       <slot name="header"></slot>
  //     </div>
  //     <div class="body">
  //       <slot name="body"></slot>
  //     </div>
  //   </div>
  // `,
  template: `
    <div :style="style">
      <slot value="456"></slot>
      <child-component/>
    </div>
  `,
  data() {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      }
    }
  }
};

new Vue({
  el: '#root',
  components: {
    Comp: component
  },
  provide() {
    // 为什么不把 provide 直接写成一个对象？
    // 因为在调用this的时候vue实例还未创建成功, 这时候的this为undefined
    // 所以要写成函数返回的形式
    // 并且提供给后代的数据默认没有 reactivity 行为
    const data = {};
    // 利用属性的get方法激活 reactivity 行为, 这也是vue reactivity实现的基础
    // 不推荐
    Object.defineProperty(data, 'value', {
      get: () => this.value,
      enumerable: true
    })

    return {
      papa: this,
      value: this.value,
      data
    }
  },
  data() {
    return {
      value: '123'
    }
  },
  mounted() {
    console.log(this.$refs.comp, this.$refs.span);
  },
  template: `
    <div>
      <comp ref="comp">
        <span slot-scope="props" ref="span">{{ props.value }}</span>
      </comp>
      <input type="text" v-model="value"/>
    </div>
  `
})
