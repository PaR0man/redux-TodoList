import React from "react";
import { useDispatch } from "react-redux";
import { removeCompleted } from "../../actions";
import { Filter } from "../Filters";

export const Footer = () => {
  const dispatch = useDispatch();

  const filterConfig = [
    { title: "Show compleded", config: "completed" },
    { title: "Show in progress", config: "progress" },
    { title: "Show all", config: "all" },
  ];

  const handleRemoveCompleted = () => {
    dispatch(removeCompleted());
  };

  return (
    <div className='footer'>
      {filterConfig.map((filter) => (
        <Filter
          key={filter.config}
          title={filter.title}
          config={filter.config}
        />
      ))}
      <button onClick={handleRemoveCompleted}>Clear Completed</button>
    </div>
  );
};
