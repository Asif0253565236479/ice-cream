import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import MassageBox from '../component/MassageBox'
import LoaddingBox from '../component/LoaddingBox'
import {detailsProduct} from '../actions/Product.actions.jsx'
import Singleproduct from '../component/singleproduct/singleproduct'
export default function SingleProduct(props) {
 const productDetails = useSelector((state) => state.productDetails)
 const {loadding , error , product} = productDetails;
  const dispatch = useDispatch()
  const productId = props.match.params.id
console.log(product)
 useEffect( ()=>{ 
   dispatch(detailsProduct(productId))
 }, [dispatch , productId])
    return (
        <div>
          {loadding ? (<LoaddingBox />) : error ?(<MassageBox variant="danger">{error}</MassageBox>) : (<Singleproduct product={product}/>)}
         
        </div>
    )
}
