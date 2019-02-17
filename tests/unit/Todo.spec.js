import { createLocalVue, shallowMount } from "@vue/test-utils";
import TodoApp from "../../src/components/TodoApp.vue";
import TodoList from "../../src/components/TodoList.vue";
import Buefy from "buefy";

const localVue = createLocalVue();

localVue.use(Buefy);

const $firebase = {
  firestore: () => ({
    collection: () => ({
      onSnapshot: () => null
    })
  })
};

describe("TodoApp", () => {
  test("should be Vue Instance", () => {
    const wrapper = shallowMount(TodoApp, { localVue, mocks: { $firebase } });
    expect(wrapper.isVueInstance()).toBe(true);
  });
});

describe("TodoList", () => {
  test("should have two todo items", () => {
    const wrapper = shallowMount(TodoList, {
      localVue,
      propsData: {
        todos: [
          { id: 1, todo: "読書", description: "一時間読書する" },
          { id: 2, todo: "ジョギング", description: "一時間ジョギングする" }
        ]
      }
    });
    const boxes = wrapper.findAll(".box");
    expect(boxes.length).toBe(2);
  });
});
