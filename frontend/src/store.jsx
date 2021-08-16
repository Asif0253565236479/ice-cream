import {cartReduaser} from '../src/reduser/cartReduaser'
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { productDetailsReduser, productListReduser } from "./reduser/ProductReduser";
const initialState = {
  cart:{ 
    CartItem: localStorage.getItem('CartItem') ? JSON.parse(localStorage.getItem('CartItem')) : []
  }
};
const reducer = combineReducers({
  productList: productListReduser,
  productDetails: productDetailsReduser,
  cart: cartReduaser,
})
;
const composerEnhencer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composerEnhencer(applyMiddleware(thunk))
);

export default store;
