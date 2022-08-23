import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import counterReducer from "./modules/counter/reducer"

const reducers = combineReducers({counter: counterReducer});

const store = legacy_createStore(reducers, applyMiddleware(thunk));

export default store;