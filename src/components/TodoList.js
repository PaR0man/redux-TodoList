import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo._id}
          id={todo._id}
          {...todo}
          onClick={() => toggleTodo(todo._id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
