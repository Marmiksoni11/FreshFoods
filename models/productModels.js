
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define schema for pizzas
const pizzaSchema = new Schema({
  id: String,
  name: String,
  company: String,
  price: String,
  image: String,
});

// Define schema for burgers
const burgerSchema = new Schema({
  id: String,
  name: String,
  company: String,
  price: String,
  image: String,
});

const ChineseSchema = new Schema({
  id: String,
  name: String,
  company: String,
  price: String,
  image: String,
});

const thaliSchema = new Schema({
  id: String,
  name: String,
  company: String,
  price: String,
  image: String,
});

const beveragesSchema = new Schema({
  id: String,
  name: String,
  company: String,
  price: String,
  image: String,
});

const wrapsAndRollsSchema = new Schema({
  id: String,
  name: String,
  company: String,
  price: String,
  image: String,
});

const bestsellerSchema = new Schema({
  id: String,
  name: String,
  company: String,
  price: String,
  image: String,
});



// Define model for pizzas
const Pizza = mongoose.model('Pizza', pizzaSchema);


const Burger = mongoose.model('Burger', burgerSchema);


const Chinese = mongoose.model('Chinese', ChineseSchema);


const WrapsAndRolls = mongoose.model('WrapsAndRolls', wrapsAndRollsSchema);


const Beverages = mongoose.model('Beverages', beveragesSchema);


const Thalis = mongoose.model('Thalis', thaliSchema);


const BestSellers = mongoose.model('BestSellers', bestsellerSchema);


// // Define common schema for all products
// const productSchema = new Schema({});

// const Product = mongoose.model('Product', productSchema, 'products');

module.exports = {
  Pizza,
  Burger,
  Chinese,
  Thalis,
  Beverages,
  WrapsAndRolls,
  BestSellers,
};