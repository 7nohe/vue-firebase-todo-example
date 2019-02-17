<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">Todo List</p>
    </div>
    <div class="card-content">
      <div class="content">
        <template v-for="(todo, index) in todos">
          <div class="box" :key="`box-${index}`">
            <a @click="onClickOpenModal(todo);">{{ todo.todo }}</a>
            <div style="float: right;" class="delete is-large" @click="onClickDeleteTodo(todo);"/>
          </div>
        </template>
        <b-modal :active.sync="isActive" has-modal-card>
          <todo-modal :todo="modal.todo" :description="modal.description"/>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
const todoModal = {
  props: ["todo", "description"],
  template: `
  <div class="modal-card">
    <div class="modal-card-head">
     <p class="modal-card-title">{{todo}}</p>
    </div>
    <section class="modal-card-body">
      <p>{{ description }}</p>
    </section>
  </div>
  `
};
export default {
  name: "TodoList",
  components: { todoModal },
  props: {
    todos: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isActive: false,
      modal: {
        todo: "",
        description: ""
      }
    };
  },
  methods: {
    onClickOpenModal(todo) {
      this.isActive = true;
      this.modal = { ...todo };
    },
    onClickDeleteTodo(index) {
      this.$emit("delete-todo", index);
    }
  }
};
</script>

<style scoped></style>
