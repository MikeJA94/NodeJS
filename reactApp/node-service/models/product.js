// Dependecnies
//var restful = require('node-restful');
var mongoose = require('mongoose');
//var mongoose = restful.mongoose;



// Schema
var productSchema = mongoose.Schema({
    name:String,
    sku:String,
    price:Number
})
// Return model
//module.exports = restful.model('Products',productSchema); 
module.exports = mongoose.model('Products',productSchema); 

 