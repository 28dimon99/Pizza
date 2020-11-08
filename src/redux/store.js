import {applyMiddleware, combineReducers, createStore} from "redux";
import {logger} from "redux-logger";
import pizzaReducer from "./pizzaReducer";




let reducers = combineReducers({
    pizzaReducer,
});



export default () =>{
    const store = createStore(reducers, applyMiddleware(logger));
    return store
}


