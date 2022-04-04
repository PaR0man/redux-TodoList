import { filterActions, filterTypes } from "../../actions/types";

export const filterReducer = (
  state = { currentFilter: filterTypes.ALL },
  action
) => {
  switch (action.type) {
    case filterActions.SET_FILTER:
      return { currentFilter: action.filter };
    default:
      return state;
  }
};
