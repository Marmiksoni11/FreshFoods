
require('dotenv').config()

const connectDB = require('./db/connect')

const { Pizza,
  Burger,
  Chinese,
  Thalis,
  Beverages,
  WrapsAndRolls,
  BestSellers,
} = require('./models/productModels')

const { 
  pizzaData,
      burgerData,
      ChineseData,
      thaliData,
      beveragesData,
      bestsellerArray,
      wrapsAndRollsData
    } = require("./products")

// Add more arrays as needed

const saveProducts = async (Product, productsData) => {
  try {
    // Clear existing data
    await Product.deleteMany();

    // Create instances and save data
    await Product.create(productsData);
    console.log('Success!!!!');
  } catch (error) {
    console.error(error);
   }
};

const start = async () => {
  try {
    
    await connectDB(process.env.MONGO_URI);
    await saveProducts(Pizza, pizzaData)
    await saveProducts(Burger, burgerData)
    await saveProducts(Chinese, ChineseData) 
    await saveProducts(Thalis, thaliData)
    await saveProducts(Beverages, beveragesData)
    await saveProducts(BestSellers, bestsellerArray)
    await saveProducts(WrapsAndRolls, wrapsAndRollsData)

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
