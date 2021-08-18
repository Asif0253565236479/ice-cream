import express from 'express';
import  mongoose  from 'mongoose';
import userRouter from './router/UserRouter.js';
import ProductRouter from './router/ProductRouter.js';

const app = express();

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/ice-cream', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.get('/' , (req , resp) =>{ 
    resp.send("server is ready 2");
});



app.use('/api/users' , userRouter)
app.use('/api/products' , ProductRouter)




app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });



 const port = process.env.PORT || 5000;
app.listen(port , () =>{
    console.log( `Server is http://localhost:${port}`);
});