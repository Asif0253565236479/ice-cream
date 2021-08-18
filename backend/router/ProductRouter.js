import express from 'express'
import expressAsyncHandler from 'express-async-handler';
import { products } from '../data.js';
import Product from '../models/productModule.js';


const ProductRouter = express.Router();

ProductRouter.get('/' , expressAsyncHandler(async(req , res) =>{
    const products = await Product.find({});
    res.send(products)
}))
ProductRouter.get('/seed' , expressAsyncHandler(async(req , res) =>{
    const createedProducts = await Product.insertMany(products);
    res.send({createedProducts})
}))
ProductRouter.get('/:id' , expressAsyncHandler(async(req , res) =>{
    const product = await Product.findById(req.params.id);
    if(product){
        res.send(product)
    }
    else{
        res.status(404).send({message: 'Product Not Found'})
    }
}))

export default ProductRouter