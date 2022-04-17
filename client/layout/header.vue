<template>
  <header :class="$style.mainHeader">
    <h1>JTodo</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  // $style.mainHeader 等同于, 好处是不会有CSS命名冲突、可以自定义CSS命名, 方便调试
  // computed: {
  //   $style() {
  //     return {
  //       mainHeader: ''
  //     }
  //   }
  // }
};
</script>

<style lang="stylus" module>
.main-header {
  text-align: center;

  h1 {
    font-size: 100px;
    color: rgba(175, 47, 47, 0.4);
    font-weight: 100;
    margin: 20px;
  }
}
</style>

<docs>#123 = 456 </docs>