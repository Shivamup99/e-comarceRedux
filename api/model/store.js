const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    id:String,
    image:String,
    description:String,
    title:String,
    price:Number,
    description:String,
    category:String,
    rating:Object
})

module.exports = mongoose.model('Product',productSchema)