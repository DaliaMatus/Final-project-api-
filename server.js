import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import data from './database';
import config from './config';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import orderRoute from './routes/orderRoute';


import Product from './models/productModel';
dotenv.config();

const mongodbUrl= config.MONGODB_URL;
mongoose.connect(mongodbUrl,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true
}).catch(error => console.log(error.reason));
const app=express();

app.use(bodyParser.json());
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use("/api/orders", orderRoute);

//Static API
/*app.get('/api/products/:id',(req, res)=>{ 
  const productId =req.params.id;
  const product = data.products.find(x=>x._id ===productId);
  if (product)
    res.send(product);
  else
    res.status(404).send({message:"Product Not Found."});            
  }); 
  
app.get('/api/products',(req, res)=>{ 
  res.send(data.products);            
  });*/

app.post('/api/products', (req,res) =>{
  console.log('POST /api/product')
  console.log(req.body)

  let product= new Product()
  product.name= req.body.name
  product.price=req.body.price
  product.image=req.body.image
  product.brand=req.body.brand
  product.color=req.body.color
  product.countInStock=req.body.countInStock
  product.description=req.body.description
  product.stars=req.body.stars
  product.reviews=req.body.reviews

  product.save((err, productStored)=>{
    if(err)res.status(500).send({message:`Error when saving in the database: ${err}`})

    res.status(200).send({product: productStored})
  })

})

/*app.get('/api/products', (req,res)=>{
  Product.find({}, (err, products)=>{
    if(err) return res.status(500).send({message:'Error while making the request'});
    if(!products) return res.status(404).send({message:'No products exist'});
    
    res.send(200, {products})
  })
})

app.get('/api/products/:id', (req, res)=>{
  let id=req.params.id

  Product.findById(id, (err, product)=>{
    if(err)return res.status(500).send({message:'Error while making the request'})
    if(!products) return res.status(404).send({message:'No product exist'});
    
    res.send(200, {products})
  })
})*/

app.delete('/api/products/:id', (req,res)=>{
  let id=req.params.id

  Product.findById(id, (err, product)=>{
    if(err) res.status(500).send({message:`Error while deleting product: ${err}`})
    

    product.remove(err =>{
      if(err) res.status(500).send({message:`Error while deleting product: ${err}`})
      res.status(200).send({message:'The product has been deleted'})
    })
  })
})

app.listen(8000, ()=> {console.log("Server sarted at http://localhost:8000")});
