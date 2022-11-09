const mongoose = require ('mongoose')

const productSchema = new mongoose.Schema({
   name: String,
   categaory: String,
   price: {
    type:Number,
    require: true
   },
},{timestamps:true});

module.exports = mongoose.model('Product',productSchema)