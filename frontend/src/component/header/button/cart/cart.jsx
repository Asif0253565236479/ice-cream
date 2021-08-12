import React from 'react'
import classes from './cart.module.css'

export default function cart() {
    return (
        <div>
            <a className={classes.cart} href='/cart'><i className='fas fa-shopping-cart'></i></a>
        </div>
    )
}