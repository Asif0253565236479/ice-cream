import React, { useEffect } from 'react'
import classes from "./Cart.module.css"
import { useDispatch} from 'react-redux'
import {addToCart} from '../../actions/CartAction'



export default function Cart(props) {
    const  productId = props.ID
    const  qty = props.QTY
    const dispatch = useDispatch();
useEffect(() => {
  if (productId) {
    dispatch(addToCart(productId, qty));
  }
}, [dispatch, productId, qty]);
    
    return (
        <div>
            {productId} = {qty}
        </div>
    )
}
