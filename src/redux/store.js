import {applyMiddleware, createStore} from "redux";
import rootReducers from "./rootReducers";
import {logger} from "redux-logger";


export default () =>{
    const store = createStore(rootReducers, applyMiddleware(logger));
    return store
}