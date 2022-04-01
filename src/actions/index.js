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
