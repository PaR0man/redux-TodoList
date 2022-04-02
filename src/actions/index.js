import { listActions } from "./types";

let counter = 0;

export const addTodo = (title) => ({
  type: listActions.ADD_TODO,
  payload: {
    id: counter++,
    title: title,
    isCompleted: false,
  },
});

export const removeTodo = (id) => ({
  type: listActions.REMOVE_TODO,
  payload: id,
});

export const toggleTodo = (id) => ({
  type: listActions.TOGGLE_TODO,
  payload: id,
});

export const removeCompleted = () => ({
  type: listActions.REMOVE_COMPLETED,
});
