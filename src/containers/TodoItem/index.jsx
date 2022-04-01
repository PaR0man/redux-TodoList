import React from "react";

export const TodoItem = ({ id, title, isCompleted }) => {
  return (
    <div className='todoItem'>
      <input type='checkbox' value={isCompleted} />
      <h3 className='todoItemTitle'>{title}</h3>
      <button>X</button>
    </div>
  );
};
