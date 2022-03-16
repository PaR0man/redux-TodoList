import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import { getTodos } from '../actions';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  dispatch(getTodos());

  return (
    <div id="TodoApp">
      <h1>Todos</h1>
      <h2>
        Using <span id="React">React</span> and <span id="Redux">Redux</span>
      </h2>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
};

export default App;
