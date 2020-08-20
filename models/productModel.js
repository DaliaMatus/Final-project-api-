/*import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {type: String, required:true},
    image:{type:String,required:true},
    brand:{type:String, required:true},
    price:{type:Number, default:0, required:true},
    color:{type:String, required:true},
    countInStock:{type:Number, default:0, required:true},
    description:{type:String, required:true},
    stars:{type:Number, default:0, required:true},
    reviews:{type:Number, default:0, required:true}
});

const productModel= mongoose.model("Product", productSchema);

export default productModel;*/

'use strict'

const mongoose =require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = Schema({
    name:String,
    image:String,
    brand:String,
    price:{type:Number, default:0},
    color:{type:String, enum:['Gray', 'Black', 'White', 'Pink']},
    countInStock:{type:Number, default:0},
    description:String,
    stars:{type:Number, default:0},
    reviews:{type:Number, default:0}
}) 

module.exports=mongoose.model('Product', ProductSchema)