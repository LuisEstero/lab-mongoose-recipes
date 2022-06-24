const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
   title: {
    type: String,
    required: true, // este elemento es obligatorio, si no, error!
    unique: true // este elemento no puede repetirse, si se fuese a repetir, error!
  },

  level: {
    type: String,
    enum : ['Easy Peasy','Amateur Chef','UltraPro Chef'],
    default: 'NEW'
  },

  ingredients: {
    type: [String]
    
  },

  cuisine :{
    type : String,
    required: true,

  },

  dishType :{
    type: String,
    enum : ['breakfast', 'main_course', 'soup', 'snack', 'drink', 'dessert' , 'other'],

  },
  
   image : {
    type : String,

  },

  duration : {
    Type : Number,
  },
 
  creator : {
    type: String,
  },

  created: {
    type: Date,
  }
  
});


const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
