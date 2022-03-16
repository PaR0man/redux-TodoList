import React from 'react';
import { connect } from 'react-redux';
import { deleteTodos } from '../actions';

const DeleteTodos = ({ completed, dispatch }) => {
  return (
    <button
      onClick={() => {
        dispatch(deleteTodos(completed));
      }}
    >
      Delete completed
    </button>
  );
};

export default connect()(DeleteTodos);
