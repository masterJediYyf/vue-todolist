<template>
  <section class="real-app">
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下来要做什么"
      @keyup.enter="addTodo"
    />
    <Item
      v-for="todo in filteredTodos"
      :key="todo.id"
      :todo="todo"
      @del="deleteTodo"
    />
    <Tabs
      :filter="filter"
      :todos="todos"
      @toggle="toggleFilter"
      @clearAllCompleted="clearAllCompleted"
    />
    <!-- <router-view></router-view> -->
  </section>
</template>

<script>
import Item from './item.vue';
import Tabs from './tabs.vue';

let id = 0;

export default {
  beforeRouteEnter(to, from, next) {
    console.log('todo before enter');
    next((vm) => {
      console.log('after enter this.id is', vm.id);
    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log('todo update enter');
    next();
  },
  // 只有使用 params 路由的时候才会触发
  beforeRouteLeave(to, from, next) {
    console.log('doto leave enter');
    next();
  },
  name: 'todo',
  props: ['id'],
  data() {
    return {
      todos: [],
      filter: 'all'
    };
  },
  mounted() {
    console.log(this.id, '拿到路径的params');
  },
  components: {
    Item,
    Tabs
  },
  computed: {
    filteredTodos() {
      if (this.filter === 'all') {
        return this.todos;
      }
      const completed = this.filter === 'completed';
      return this.todos.filter((todo) => completed === todo.completed);
    }
  },
  methods: {
    addTodo(e) {
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      });
      e.target.value = '';
    },
    deleteTodo(id) {
      // 传进去的是每一个todo 判断一下 todo.id===id 就是我们想要的结果
      this.todos.splice(
        this.todos.findIndex((todo) => todo.id === id),
        1
      );
    },
    toggleFilter(state) {
      this.filter = state;
    },
    clearAllCompleted() {
      this.todos = this.todos.filter((todo) => !todo.completed);
    }
  }
};
</script>

<style lang="stylus" scoped>
.real-app {
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 5px #666;
}

.add-input {
  position: relative;
  padding: 0;
  margin: 0 auto;
  width: 100%;
  height: 32px;
  line-height: 32px;
  letter-spacing: 2px;
}
</style>
