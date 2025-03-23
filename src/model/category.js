const mongoose = require('mongoose')
const CategorySchema=mongoose.Schema({
    name:{type:String},
    email:{type:String},
    age:{type:Number},
    city:{type:String},
    profession:{type:String},
  
})
const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;