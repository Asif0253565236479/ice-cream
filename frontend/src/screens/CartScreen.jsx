import React from 'react'
import Cart from '../component/cart/Cart'

export default function CartScreen(props) {
    const ID = props.match.params.id
    const QTY = props.location.search ? Number(props.location.search.split('=')[1] ) : 1
    return (
        <div>
            <Cart ID={ID} QTY={QTY}/>
        </div>
    )
}
