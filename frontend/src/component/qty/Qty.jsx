import React, { useState } from 'react'
import classes from './Qty.module.css'

export default function Qty(props) {
    const product = props.product
    const [qty , setQty] = useState(1);
    console.log(product.stok)
    return (
        <div>
            <p>Quantity</p>
            <select value={qty} onChange={(e) => setQty(e.target.value)} >
            {[...Array(product.stok).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}

            </select>
        </div>
    )
}
