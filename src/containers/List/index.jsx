import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { filterTypes } from "../../actions/types";
import { TodoItem } from "../TodoItem";

export const List = () => {
  const [todoList, currentFilter] = useSelector((state) => [
    state.todoReducer.todos,
    state.filterReducer.currentFilter,
  ]);

  const [filteredTodos, setFilteredTodos] = useState(todoList);

  const handleSetFilteredTodos = () => {
    switch (currentFilter) {
      case filterTypes.COMPLETED:
        return todoList.filter((todo) => todo.isCompleted === true);
      case filterTypes.IN_PROGRESS:
        return todoList.filter((todo) => todo.isCompleted === false);
      default:
        return todoList;
    }
  };

  useEffect(() => {
    setFilteredTodos(handleSetFilteredTodos());
  }, [currentFilter, todoList]);

  return (
    <div className='list'>
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          isCompleted={todo.isCompleted}
        />
      ))}
    </div>
  );
};
