import React from "react";
import { useDispatch } from "react-redux";
import { removeCompleted } from "../../actions";
import { filterTypes } from "../../actions/types";
import { Filter } from "../Filters";

export const Footer = () => {
  const dispatch = useDispatch();

  const filterConfig = [
    { title: "Show compleded", config: filterTypes.COMPLETED },
    { title: "Show in progress", config: filterTypes.IN_PROGRESS },
    { title: "Show all", config: filterTypes.ALL },
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
