import express from 'express';
import {products} from './data.js'

const app = express();

app.get('/' , (req , resp) =>{ 
    resp.send("server is ready 2");
});

app.get('/api/products' , (req , resp) =>{ 
    resp.send(products);
});
 const port = process.env.PORT || 5000;
app.listen(port , () =>{
    console.log( `Server is http://localhost:${port}`);
});