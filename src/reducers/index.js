import { combineReducers } from "redux";
import authenticationReducer from "./authentication";
import messageReducer from "./message";

const reducer = combineReducers({
  authentication: authenticationReducer,
  message: messageReducer
});

export default reducer;