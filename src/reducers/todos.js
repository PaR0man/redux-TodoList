import * as Types from '../types';
const initialState = {
  isLoading: false,
  todoArr: [],
  hasError: null,
};

const todos = (state = initialState, action) => {
  // console.log('action', action);
  switch (action.type) {
    case Types.ADD_TODO_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case Types.ADD_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasError: null,
        todoArr: [...state.todoArr, action.payload],
      };

    case Types.TOGGLE_TODO_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case Types.TOGGLE_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasError: null,
        todoArr: [
          ...state.todoArr.map((todo) =>
            todo._id === action.payload._id
              ? { ...todo, status: !todo.status }
              : todo
          ),
        ],
      };

    case Types.REMOVE_TODO_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case Types.REMOVE_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasError: null,
        todoArr: [
          ...state.todoArr.filter((todo) => todo._id !== action.payload._id),
        ],
      };

    case Types.DELETE_TODOS_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case Types.DELETE_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasError: null,
        todoArr: [...state.todoArr.filter((todo) => !todo.status)],
      };

    case Types.EDIT_TODO_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case Types.EDIT_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasError: null,
        todoArr: [
          ...state.todoArr.map((todo) =>
            todo._id === action.payload._id
              ? { ...todo, title: action.payload.title }
              : todo
          ),
        ],
      };

    case Types.FETCH_TODOS:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case Types.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasError: null,
        todoArr: [...action.payload],
      };
    default:
      return state;
  }
};

export default todos;
