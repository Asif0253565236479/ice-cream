
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { productListReduser } from "./reduser/ProductReduser";
const initialState = {};
const reducer = combineReducers({
  productList: productListReduser,
})
;
const composerEnhencer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composerEnhencer(applyMiddleware(thunk))
);

export default store;
