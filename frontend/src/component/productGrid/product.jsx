import React, { useEffect} from "react";
import classes from "./product.module.css";
import Cart from "./addtocart/addtocart";
import Ratting from "./ratting/ratting";
import LoaddingBox from "../LoaddingBox";
import MassageBox from "../MassageBox";
import {useDispatch, useSelector} from 'react-redux'
import { ListProducts } from "../../actions/Product.actions";

export default function Product() {
const productList = useSelector((state) => state.productList)
const dispatch = useDispatch()
const {loadding , error, products} = productList
  useEffect(() => {
    dispatch(ListProducts())
  } , [ ]);
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
                <a href={`/product/${item.id}`}>
                  <img src={item.image}></img>
                </a>
                <div className={classes.details}>
                  <a href={`/product/${item.id}`}>
                    <h4>{item.name}</h4>
                  </a>
                  <Ratting ratting={item.ratting} />
                  <p>
                    Reviews : <span>{item.reviwe}</span>
                  </p>
                  <p>
                    Price : <span>{item.price}</span>
                  </p>
                  <Cart />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
