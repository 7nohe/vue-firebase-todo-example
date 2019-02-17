<template>
  <div>
    <b-collapse class="card">
      <div slot="trigger" slot-scope="props" class="card-header">
        <p class="card-header-title">Create Todo</p>
        <a class="card-header-icon">
          <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
        </a>
      </div>
      <div class="card-content">
        <div class="content">
          <b-field label="Todo">
            <b-input v-model="newTodo" required/>
          </b-field>
          <b-field label="Description">
            <b-input maxlength="200" type="textarea" v-model="newDesc"/>
          </b-field>
        </div>
      </div>
      <footer class="card-footer">
        <div class="card-footer-item">
          <button class="button is-primary is-medium is-rounded" @click="onClickCreate">Create!</button>
        </div>
      </footer>
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: "TodoForm",
  data() {
    return {
      newTodo: "",
      newDesc: ""
    };
  },
  methods: {
    onClickCreate() {
      if (!this.newTodo) return;
      this.$emit("create-todo", {
        todo: this.newTodo,
        description: this.newDesc
      });
      this.newTodo = "";
      this.newDesc = "";
    }
  }
};
</script>

<style scoped></style>
