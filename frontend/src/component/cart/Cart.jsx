import React from 'react'
import classes from "./Cart.module.css"

export default function Cart(props) {
    const  id = props.ID
    const  qty = props.QTY
    return (
        <div>
            {id} = {qty}
        </div>
    )
}
