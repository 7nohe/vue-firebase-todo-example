import { createLocalVue, shallowMount } from "@vue/test-utils";
import TodoApp from "../../src/components/TodoApp.vue";
import TodoList from "../../src/components/TodoList.vue";
import TodoForm from "../../src/components/TodoForm.vue";
import Buefy from "buefy";

const localVue = createLocalVue();

localVue.use(Buefy);

const $firebase = {
  firestore: () => ({
    collection: () => ({
      onSnapshot: () => null,
      add: () => null
    })
  })
};

describe("TodoApp", () => {
  test("should be Vue Instance", () => {
    const wrapper = shallowMount(TodoApp, { localVue });
    expect(wrapper.isVueInstance()).toBe(true);
  });
});

describe("TodoList", () => {
  test("should have two todo items", () => {
    const wrapper = shallowMount(TodoList, { localVue, mocks: { $firebase } });
    wrapper.setData({
      todos: [
        { id: 1, todo: "読書", description: "一時間読書する" },
        { id: 2, todo: "ジョギング", description: "一時間ジョギングする" }
      ]
    });
    const boxes = wrapper.findAll(".box");
    expect(boxes.length).toBe(2);
  });
});
