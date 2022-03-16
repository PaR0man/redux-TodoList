import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNewTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  const [value, setValue] = useState('');

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addNewTodo(value));
          setValue('');
        }}
      >
        <input
          id="AddTodo"
          value={value}
          placeholder="What need's to be done"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default connect()(AddTodo);
