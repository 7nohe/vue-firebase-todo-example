<template>
  <div class="title is-ancestor">
    <div class="tile is-vertical is-12 is-parent is-primary">
      <todo-form @create-todo="createTodo"/>
    </div>
    <div class="tile is-vertical is-12 is-parent is-danger">
      <todo-list :todos="todos" @delete-todo="deleteTodo"/>
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
    return {
      todos: [],
      collection: null
    };
  },
  methods: {
    fetchTodos() {
      this.collection.onSnapshot(snaps => {
        this.todos = snaps.docs.map(doc => {
          return { id: doc.id, ...doc.data() };
        });
      });
    },
    createTodo(newTodo) {
      this.collection.add(newTodo);
    },
    deleteTodo(todo) {
      this.collection
        .doc(todo.id)
        .delete()
        .then(() => {
          console.log("successfully deleted");
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.collection = this.$firebase.firestore().collection("todo");
    this.fetchTodos();
  }
};
</script>

<style scoped></style>
