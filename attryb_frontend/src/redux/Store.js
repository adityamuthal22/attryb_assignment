import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import carReducerFun from "./reducer/car.reducer";

const rootReducer = combineReducers({
    cardetails: carReducerFun,
});

const Store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default Store;
