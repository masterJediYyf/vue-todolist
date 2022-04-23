import Vue from 'vue';

new Vue({
  el: '#root',
  template: `
    <div>
      {{ isActive ? 'active' : 'not active' }}
      {{ getJoinedArr }}
      <p
        v-html="html"
        :style="styles"
      ></p>
    </div>
  `,
  // template: `
  //   <div :class="[{ active: isActive }]">
  //     <p v-html="html"></p>
  //   </div>
  // `,
  data: {
    isActive: false,
    arr: [1, 2, 3],
    html: '<span>hello world</span>',
    styles: {
      color: 'red',
      appearance: 'none'
    }
  },
  computed: {
    getJoinedArr: function () {
      return this.arr.join(' ');
    }
  }
})
