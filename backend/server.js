import express from 'express';
import {products} from './data.js'
import  mongoose  from 'mongoose';
import userRouter from './router/UserRouter.js';

const app = express();

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/ice-cream', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.get('/' , (req , resp) =>{ 
    resp.send("server is ready 2");
});

app.get('/api/products' , (req , resp) =>{ 
    resp.send(products);
});


app.use('/api/users' , userRouter)
app.get('/api/products/:id' , (req , res) =>{ 
    const product = products.find( (x) => x.id === req.params.id);
    if(product){
        res.send(product);
    }else{
        res.status(404).send({message:"Product Not Found"});
    }
});



app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });



 const port = process.env.PORT || 5000;
app.listen(port , () =>{
    console.log( `Server is http://localhost:${port}`);
});