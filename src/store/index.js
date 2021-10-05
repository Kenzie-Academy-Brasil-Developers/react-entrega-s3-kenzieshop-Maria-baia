import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import shop from "./modules/products/reducer"
import user from "./modules/login/reducer"


const reducers = combineReducers({shop, user});
const store = createStore(reducers,applyMiddleware(thunk));

export default store;