import { VisibilityFilters } from "../actions";

export function getVisibleTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
          return todos;
        case VisibilityFilters.SHOW_COMPLETED:
          // console.log(todos);
          console.log(filter);
          return todos.filter((t) => t.status);
        case VisibilityFilters.SHOW_ACTIVE:
          return todos.filter((t) => !t.status);
        default:
          return []
    }
}