import React, { useEffect } from 'react'
import classes from "./Cart.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, cartRemoveItem } from '../../actions/CartAction'
import { Link  } from 'react-router-dom'


export default function Cart(props) {
  const productId = props.ID
  const qty = props.QTY
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  const cart = useSelector((state) => state.cart)
  const { CartItem } = cart;
  
  const itemRemoveHanduler = (id) => { 
    //delete action
    dispatch(cartRemoveItem(id))
    console.log(id)
  }

  return (
    <div className={classes.shoppingCart}>
      <div className={classes.col_1}>
        <h2>Shopping Cart</h2>
        <div className={classes.row}>
          <ul>
            {CartItem.length === 0 ? (<div>No Item in Cart <Link to='/'>Go To Shopping</Link></div>) :
              CartItem.map((item) => {
                return (
                  <li>
                    <img className={classes.smallimg} src={item.image} alt={item.name}></img>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                    <p>{item.price}</p>
                    <select value={item.Qty} onChange={(e) => {
                      dispatch(addToCart(item.product, Number(e.target.value)))
                    }}>
                      {[...Array(item.stok).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                    <button type='button' onClick={() => itemRemoveHanduler(item.product)}>DELETE</button>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    <div className={classes.col_2}>
      <div className={classes.box}>
        <h4>SubTotal &nbsp;({CartItem.reduce((a , c) => a + c.Qty , 0 )  } &nbsp;Items)  : &nbsp; $
         {CartItem.reduce((a , c) => a + c.price * c.Qty , 0 )} Price</h4>
        <Link to='/singin?redirect=shopping'>
         <button
                type="button"
               className={classes.chackout}
                disabled={CartItem.length === 0}
              >
                Proceed to Checkout
              </button>
              </Link>
      </div>
    </div>
    </div>
  )
}
