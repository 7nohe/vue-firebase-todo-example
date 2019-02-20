<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">Todo List</p>
    </div>
    <div class="card-content">
      <div class="content">
        <template v-for="(todo, index) in todos">
          <div class="box" :key="`box-${index}`">
            <div style="float: right;" class="delete is-large" @click="onClickDeleteTodo(todo);"/>
            <a @click="onClickOpenModal(todo);">{{ todo.todo }}</a>
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
  data() {
    return {
      todos: [],
      isActive: false,
      modal: {
        todo: "",
        description: ""
      },
      db: this.$firebase.firestore()
    };
  },
  methods: {
    onClickOpenModal(todo) {
      this.isActive = true;
      this.modal = { ...todo };
    },
    onClickDeleteTodo(todo) {
      this.db
        .collection("todo")
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
    this.db.collection("todo").onSnapshot(snaps => {
      this.todos = snaps.docs.map(doc => {
        return { id: doc.id, ...doc.data() };
      });
    });
  }
};
</script>

<style scoped></style>
