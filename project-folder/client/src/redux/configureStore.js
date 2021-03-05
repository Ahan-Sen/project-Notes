import { createStore, combineReducers, applyMiddleware } from "redux";
import { Notes } from "./note/noteReducer";
import { User } from "./auth/authReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      notes: Notes,
      user: User,
    }),
    composeWithDevTools(applyMiddleware(thunk, logger))
  );

  return store;
};
