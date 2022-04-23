<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <router-link to="/app/123">App</router-link>
    <router-link to="/login">Login</router-link>
    <transition name="fade">
      <router-view />
    </transition>
    <Footer></Footer>
    <!-- <router-view name="a" /> -->
  </div>
</template>

<script>
import Header from "./layout/header.vue";
import Footer from "./layout/footer.jsx";
// import Todo from './views/todo/todo.vue';

export default {
  components: {
    Header,
    // Todo,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<style lang="stylus" scoped>
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

#cover {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #999;
  opacity: 0.9;
  z-index: -1;
}
</style>
