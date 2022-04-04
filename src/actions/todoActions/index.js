import { listActions } from "../types";

let counter = 0;

export const addTodo = (title) => ({
  type: listActions.ADD_TODO,
  newTodo: {
    id: counter++,
    title: title,
    isCompleted: false,
  },
});

export const removeTodo = (id) => ({
  type: listActions.REMOVE_TODO,
  id,
});

export const toggleTodo = (id) => ({
  type: listActions.TOGGLE_TODO,
  id,
});

export const removeCompleted = () => ({
  type: listActions.REMOVE_COMPLETED,
});
