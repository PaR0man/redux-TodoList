import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo } from '../actions';

const EditTodo = ({ id, initValue, onCancel }) => {
  const [value, setValue] = useState(initValue);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTodo(id, value));
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="editableTodo"
        autoFocus
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </form>
  );
};

export default EditTodo;
