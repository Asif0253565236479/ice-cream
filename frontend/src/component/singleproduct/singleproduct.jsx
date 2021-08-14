import React from 'react'
import classes from './singleproduct.module.css'
import Ratting from '../productGrid/ratting/ratting'
import Qty from '../qty/Qty'

export default function singleproduct(props) {
    const product = props.product
    const addToCartHandular = ()=>{ 
    }
    return (
        <div className={classes.singleproduct}>
          <div><a href='/' className={classes.back}><i className='fas fa-arrow-left'></i></a></div>
          <div className={classes.product}>
              <div className={classes.col_1}>
                  <img src={product.image}></img>
              </div>
              <div className={classes.col_2}>
                  <h2>{product.name}</h2>
                  <p>{product.brand}</p>
                  <p><Ratting  ratting={product.ratting}/></p>
                  <p><span>{product.reviwe}</span>+ Reviews</p>
                  <p>Price: <span>{product.price}</span></p>
                  <p> Description: <span>{product.dice}</span></p>
              </div>
              <div className={classes.col_3}>
                  <p>Sellar</p>
                  <span>{product.brand}</span>
                  <p><Ratting  ratting={product.ratting}/></p>
                  <p>Price: <span>{product.price}</span></p>
                  <Qty product = {product} />
                  {
                      product.stok > 0 ? ( <a href='#' className={classes.addtocart} onClick={addToCartHandular}>ADD TO CART</a>) :
                      (<p><span>Out Of Stock</span></p>)
                  }
                 
              </div>
          </div>
        </div>
    )
}
