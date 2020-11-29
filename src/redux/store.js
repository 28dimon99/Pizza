import {applyMiddleware, combineReducers, createStore} from "redux";
import {logger} from "redux-logger";
import pizzaReducer from "./pizzaReducer";
import setsReducer from "./setsReducer"
import pancakesReducer from "./pancakesReducer";
import snacksReducer from "./snacksReducer";
import dessertsReducer from "./dessertsReducer";
import saucesReducer from "./saucesReducer";
import drinksReducer from "./drinksReducer";
import basketReducer from "./basketReducer";







let reducers = combineReducers({
    pizzaReducer:pizzaReducer,
    setsReducer:setsReducer,
    pancakesReducer:pancakesReducer,
    snacksReducer: snacksReducer,
    dessertsReducer: dessertsReducer,
    saucesReducer: saucesReducer,
    drinksReducer: drinksReducer,
    basketReducer: basketReducer
});


const store = createStore(reducers, applyMiddleware(logger));
window.state = store;
export default store;




