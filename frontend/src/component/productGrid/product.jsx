import React, { useEffect} from "react";
import classes from "./product.module.css";
import Cart from "./addtocart/addtocart";
import Ratting from "./ratting/ratting";
import LoaddingBox from "../LoaddingBox";
import MassageBox from "../MassageBox";
import {useDispatch, useSelector} from 'react-redux'
import { ListProducts } from "../../actions/Product.actions";
import {Link} from 'react-router-dom'

export default function Product() {
const productList = useSelector((state) => state.productList)
const dispatch = useDispatch()
const {loadding , error, products} = productList
  useEffect(() => {
    dispatch(ListProducts())
  } , [ ]);
  console.log(products)
  return (
    <div>
      {loadding ? (
        <LoaddingBox />
      ) : error ? (
        <MassageBox variant='danger' >{error}</MassageBox>
      ) : (
        <div className={classes.products}>
          {products.map((item) => {
            return (
              <div className={classes.grid} key={item.id}>
                <Link to={`/product/${item._id}`}>
                  <img src={item.image}></img>
                </Link>
                <div className={classes.details}>
                  <Link to={`/product/${item._id}`}>
                    <h4>{item.name}</h4>
                  </Link>
                  <Ratting ratting={item.ratting} />
                  <p>
                    Reviews : <span>{item.reviwe}</span>
                  </p>
                  <p>
                    Price : <span>{item.price}</span>
                  </p>
                  {
                    item.stok > 0 ? (
                      <Cart /> 
                    ) : (<p> <span>Out Of Stock</span> </p>) 
                  }
                 
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
