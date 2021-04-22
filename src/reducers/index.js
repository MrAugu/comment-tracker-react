import { combineReducers } from "redux";
import authenticationReducer from "./authentication";
import messageReducer from "./message";

const reducer = combineReducers({
  authenticationReducer,
  messageReducer
});

export default reducer;