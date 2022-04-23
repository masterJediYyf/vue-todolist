import Vue from 'vue';

new Vue({
  el: '#root',
  template: `
    <div>
      <div v-text="text"></div>
      <div v-html="html" v-show="active"></div>
      <input type="text" v-model="text"/>
      <input type="checkbox" v-model="active"/>
    </div>
  `,
  data: {
    text: 0,
    active: false,
    html: '<span>this is a html</span>'
  }
});
