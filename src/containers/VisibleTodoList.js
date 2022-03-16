import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';
import { VisibilityFilters } from '../actions';

const getVisibleTodos = (todos, filter) => {
  console.log('todos', todos, filter);
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t) => t.status);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((t) => !t.status);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    todos: getVisibleTodos(state.todos.todoArr, state.visibilityFilter),
  };
};

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
