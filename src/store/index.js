import { createStore, combineReducers } from "redux";

import categories from "./categories";

const reducers = combineReducers({
  categories
});

export default createStore(reducers);
