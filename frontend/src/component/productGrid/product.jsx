import React from "react";
import classes from "./product.module.css";
import { products } from "../../data";
import Cart from "./addtocart/addtocart";
import Ratting from "./ratting/ratting";

export default function product() {
  return (
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
  );
}