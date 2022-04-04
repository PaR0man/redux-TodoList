import { listActions } from "../../actions/types";

export const todoReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case listActions.ADD_TODO:
      return { ...state, todos: [...state.todos, action.newTodo] };

    case listActions.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case listActions.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id
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
