import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import data from './database';
import config from './config';
import userRoute from './routes/userRoute';

dotenv.config();

const mongodbUrl= config.MONGODB_URL;
mongoose.connect(mongodbUrl,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true
}).catch(error => console.log(error.reason));
const app=express();

app.use('/api/users', userRoute);
app.get('/api/products/:id',(req, res)=>{ 
  const productId =req.params.id;
  const product = data.products.find(x=>x._id ===productId);
  if (product)
    res.send(product);
  else
    res.status(404).send({message:"Product Not Found."});            
  }); 
  
app.get('/api/products',(req, res)=>{ 
  res.send(data.products);            
  }); 

app.listen(8000, ()=> {console.log("Server sarted at http://localhost:8000")});
