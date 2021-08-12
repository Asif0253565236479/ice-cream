import express from 'express';
import {products} from './data.js'

const app = express();

app.get('/' , (req , resp) =>{ 
    resp.send("server is ready");
});

app.get('/api/products' , (req , resp) =>{ 
    resp.send(products);
});

app.listen(5000 , () =>{
    console.log( "Server is http://localhost:5000");
});