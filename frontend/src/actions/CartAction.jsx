import Axios from 'axios'
import { CART_ADD_ITEM } from "../constant/CartConstant";

export const addToCart = (productId , Qty) => async(dispatch , getState) =>{ 
const {data} = await Axios.get(`/api/products/${productId}`);
dispatch({type:CART_ADD_ITEM , payload:{
name:data.name,
image:data.image,
brand:data.brand,
price:data.price,
product:data.id,
stok:data.stok,
Qty
}});
localStorage.setItem('CartItem' , JSON.stringify(getState().cart.CartItem))
}