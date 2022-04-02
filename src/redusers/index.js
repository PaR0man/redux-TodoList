import { listActions } from "../actions/types";

export const rootReduser = (
  state = { todos: [], currentFilter: "all" },
  action
) => {
  switch (action.type) {
    case listActions.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };

    case listActions.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case listActions.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        ),
      };
    case listActions.REMOVE_COMPLETED:
      return {
        currentFilter: "all",
        todos: state.todos.filter((todo) => todo.isCompleted === false),
      };
    default:
      return state;
  }
};
