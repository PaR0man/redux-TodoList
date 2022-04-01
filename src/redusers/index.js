import { listActions } from "../actions/types";

export const rootReduser = (
  state = { todos: [], currentFilter: "all" },
  action
) => {
  switch (action.type) {
    case listActions.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    default:
      return state;
  }
};
