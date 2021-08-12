import React, { useEffect, useState } from "react";
import classes from "./product.module.css";
import Cart from "./addtocart/addtocart";
import Ratting from "./ratting/ratting";
import axios from "axios";
import LoaddingBox from "../LoaddingBox";
import MassageBox from "../MassageBox";

export default function Product() {
  const [loadding, setLodding] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLodding(true);
        const { data } = await axios.get("/api/products");
        setLodding(false);
        setProducts(data);
      } catch (error) {
        setError(error.massage);
        setLodding(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {loadding ? (
        <LoaddingBox />
      ) : error ? (
        <MassageBox variant='danger'>{error}</MassageBox>
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
