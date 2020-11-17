import {applyMiddleware, combineReducers, createStore} from "redux";
import {logger} from "redux-logger";
import pizzaReducer from "./pizzaReducer";
import setsReducer from "./setsReducer"
import pancakesReducer from "./pancakesReducer";




let reducers = combineReducers({
    pizzaReducer:pizzaReducer,
    setsReducer:setsReducer,
    pancakesReducer:pancakesReducer
});


const store = createStore(reducers, applyMiddleware(logger));
window.state = store;
export default store;




