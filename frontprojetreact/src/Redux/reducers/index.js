import { combineReducers } from "redux"; 
import parfumsReducers from "./parfumsReducer";
import typeparfumsReducers from "./typeparfumsReducer"; 
import marquesReducers from "./marquesReducer"; 

const rootReducer= combineReducers({ 
 allparfums:parfumsReducers, 
 alltypeparfums:typeparfumsReducers, 
 allmarques:marquesReducers, 

}); 
export default rootReducer 
