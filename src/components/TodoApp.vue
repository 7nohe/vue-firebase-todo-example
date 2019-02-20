<template>
  <div class="title is-ancestor">
    <div class="tile is-vertical is-12 is-parent is-primary">
      <todo-form/>
    </div>
    <div class="tile is-vertical is-12 is-parent is-danger">
      <todo-list/>
    </div>
  </div>
</template>

<script>
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default {
  name: "TodoApp",
  components: { TodoForm, TodoList },
  data() {
    return {};
  }
};
</script>

<style scoped></style>
