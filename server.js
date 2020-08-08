import express from 'express';
import data from './database';

const app=express();

app.get('/api/products',(req, res)=>{ 
    res.send(data.products);            
  });    

app.listen(8000, ()=> {console.log("Server sarted at http://localhost:8000")});
