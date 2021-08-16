import React, { useState } from 'react'
import classes from './singleproduct.module.css'
import Ratting from '../productGrid/ratting/ratting'
import {Link} from 'react-router-dom'

export default function Singleproduct(props) {
    const product = props.product
    const [qty , setQty] = useState(1);
    const Id = product.id

    return (
        <div className={classes.singleproduct}>
          <div><Link to='/' className={classes.back}><i className='fas fa-arrow-left'></i></Link></div>
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
                  
                  {
                      product.stok > 0 ? (<div><div>
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
                        
                    </div > <Link to={`/cart/${Id}?qty=${qty}`} className={classes.addtocart}>ADD TO CART</Link> </div> ) :
                      (<p><span>Out Of Stock</span></p>)
                  }
                 
              </div>
          </div>
        </div>
    )
}
