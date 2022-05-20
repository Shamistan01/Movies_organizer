import { combineReducers } from "redux";
import cartReducer from "./Movies/reducer";
import movieItemReducer from "./StarList/reducer";

const rootReducer = combineReducers({ cartReducer, movieItemReducer });

export default rootReducer;
