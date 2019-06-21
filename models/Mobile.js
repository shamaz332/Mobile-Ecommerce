var mongoose = require('mongoose');

var MobileSchema = mongoose.Schema({
    model : String,
    weight : String,
    os:String,
    internalmemory: String,
    ram:String,
    camera:String,
    battery:String,
    color:String,
    price:Number

 });


 var Mobile=mongoose.model('Mobile',MobileSchema);
 module.exports=Mobile; 