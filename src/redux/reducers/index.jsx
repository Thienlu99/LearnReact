import { combineReducers } from "redux";
import hobbyReducer from "./Hobby";
import todoReducer from "./Todo";

const rootReducer = combineReducers({
    hobby: hobbyReducer,
    todo: todoReducer
});
export default rootReducer;