import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../../actions/todoActions";

export const TodoItem = ({ id, title, isCompleted }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = (removableId) => {
    dispatch(removeTodo(removableId));
  };

  const handleToggleItem = (toggableId) => {
    dispatch(toggleTodo(toggableId));
  };

  return (
    <div className='todoItem'>
      <input
        type='checkbox'
        checked={isCompleted}
        onChange={() => handleToggleItem(id)}
      />
      <h3 className='todoItemTitle'>{title}</h3>
      <button onClick={() => handleRemoveItem(id)}>X</button>
    </div>
  );
};
