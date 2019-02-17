<template>
  <div id="app">
    <nav
      class="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/"> Todo App </a>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span> <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>
    <section class="main"><TodoApp /></section>
  </div>
</template>

<script>
import TodoApp from "./components/TodoApp";
export default {
  name: "App",
  components: {
    TodoApp
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.main {
  padding: 32px;
  background-color: #f5f5f5;
}
</style>
