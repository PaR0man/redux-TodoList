import React, { useState } from 'react';
import RemoveTodo from '../containers/RemoveTodo';
import EditTodo from '../containers/EditTodo';
import classNames from 'classnames';

const Todo = ({ onClick, status, title, id }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {isEditing ? (
        <EditTodo
          id={id}
          initValue={title}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <div>
          <li
            className={classNames({ completed: status })}
            onDoubleClick={() => {
              setIsEditing(true);
            }}
          >
            <input type="checkbox" onClick={onClick} defaultChecked={status} />
            {title}
            <RemoveTodo id={id} />
          </li>
        </div>
      )}
    </div>
  );
};

export default Todo;
