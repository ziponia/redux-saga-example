import { combineReducers } from "redux";

import { countReducer } from "./count.reducer";

export default combineReducers({
  count: countReducer.reducer,
});

export const countActions = countReducer.actions;
