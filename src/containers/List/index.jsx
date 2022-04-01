import React from "react";
import { useSelector } from "react-redux";
import { TodoItem } from "../TodoItem";

export const List = () => {
  const todoList = useSelector((state) => state.todos);

  return (
    <div className='list'>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          title={todo.title}
          isCompleted={todo.isCompleted}
        />
      ))}
    </div>
  );
};
