// import todos from '../reducers/todos';
import * as Types from '../types';

const api = '/api/todos/';

function fetchOptions(route, method, body) {
  return fetch(api + route, {
    method: method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

const fetchTodos = () => ({
  type: Types.FETCH_TODOS,
  payload: {
    isLoading: true,
    hasError: null,
  },
});

const fetchTodosSuccess = (todos) => ({
  type: Types.FETCH_TODOS_SUCCESS,
  payload: todos,
});

export const getTodos = () => {
  return function (dispatch) {
    dispatch(fetchTodos());
    fetch('http://localhost:8082/api/todos').then((response) => {
      response.json().then((todos) => {
        dispatch(fetchTodosSuccess(todos));
      });
    });
  };
};

export const addNewTodo = (title) => (dispatch) => {
  dispatch({
    type: Types.ADD_TODO_STARTED,
  });
  return fetchOptions('', 'POST', { title })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      dispatch({
        type: Types.ADD_TODO_SUCCESS,
        payload: result,
      });
    });
};

export const editTodo = (_id, title) => (dispatch) => {
  dispatch({
    type: Types.EDIT_TODO_STARTED,
  });
  return fetchOptions(`update/${_id}`, 'PUT', { _id, title })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      dispatch({
        type: Types.EDIT_TODO_SUCCESS,
        payload: result,
      });
    });
};

export const removeTodo = (id) => (dispatch) => {
  dispatch({
    type: Types.REMOVE_TODO_STARTED,
  });
  return fetchOptions(`${id}`, 'DELETE')
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      dispatch({
        type: Types.REMOVE_TODO_SUCCESS,
        payload: result,
      });
    });
};

export const deleteTodos = (isComplete) => (dispatch) => {
  dispatch({
    type: Types.DELETE_TODOS_STARTED,
  });
  return fetchOptions(``, 'DELETE', { status: isComplete })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      dispatch({
        type: Types.DELETE_TODOS_SUCCESS,
        payload: result,
      });
    });
};

export const toggleTodo = (id, status) => (dispatch) => {
  dispatch({
    type: Types.TOGGLE_TODO_STARTED,
  });
  return fetchOptions(`check/${id}`, 'PUT', { status })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      dispatch({
        type: Types.TOGGLE_TODO_SUCCESS,
        payload: result,
      });
    });
};

export const setVisibilityFilter = (filter) => ({
  type: Types.SET_VISIBILITY_FILTER,
  filter,
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};
