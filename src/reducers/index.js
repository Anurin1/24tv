import { combineReducers } from "redux";

import movies from "./movies";

const reducers = {
  movies,
};

export default combineReducers(reducers);
