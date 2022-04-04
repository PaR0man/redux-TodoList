import { filterActions } from "../types";

export const setFilter = (filter) => ({
  type: filterActions.SET_FILTER,
  filter,
});
