import React from 'react'
import classes from './button.module.css'
import Login from './login/login'
import Cart from './cart/cart'

export default function button() {
    return (
        <div className={classes.button}>
            <Cart />
            <Login />
        </div>
    )
}