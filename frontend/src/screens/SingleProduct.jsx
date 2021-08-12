import React from 'react'
import Product from '../component/singleproduct/singleproduct'
import { products } from '../data'

export default function SingleProduct(props) {
  const product = products.find( (x) => x.id === props.match.params.id )
    return (
        <div>
          <Product product={product}/>  
        </div>
    )
}
