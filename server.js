import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


import config from './config';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';



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

app.listen(process.env.PORT || 8000, function() {console.log("Server sarted at http://localhost:8000");});
