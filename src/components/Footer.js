import React from 'react';
import FilterLink from '../containers/FilterLink';
import DeleteTodos from '../containers/DeleteTodos';
import { VisibilityFilters } from '../actions';

const Footer = () => (
  <div id='footer'>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    <DeleteTodos />
  </div>
);

export default Footer;
