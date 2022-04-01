import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../actions";

export const AddField = () => {
  const [tempTodo, setTempTodo] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo(tempTodo));
    setTempTodo("");
  };

  return (
    <form
      className='addFieldRoot'
      onSubmit={(event) => {
        event.preventDefault();
        handleAddTodo();
      }}
    >
      <input
        value={tempTodo}
        placeholder='What need to be done?'
        onChange={(event) => setTempTodo(event.target.value)}
      />
      <button type='submit'>Add</button>
    </form>
  );
};
