import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../actions";

export const Filter = ({ title, config }) => {
  const dispatch = useDispatch();

  const handleSetFilter = () => {
    dispatch(setFilter(config));
  };

  return <button onClick={handleSetFilter}>{title}</button>;
};
