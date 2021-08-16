import React from 'react'
import {useSelector} from 'react-redux'
import classes from './cart.module.css'
import {Link} from 'react-router-dom'

export default function Cart() {
     const cart = useSelector((state) => state.cart)
     const {CartItem} = cart;
    return (
        <div>
            <Link className={classes.cart} to='/cart'>
                {
                CartItem.length > 0 && (<span className={classes.badges}>{CartItem.length}</span>) 
                }
                <i className='fas fa-shopping-cart'></i>
            
                </Link>
        </div>
    )
}