const {
  Pizza,
  Burger,
  Chinese,
  Thalis,
  Beverages,
  WrapsAndRolls,
  BestSellers,
} = require("../models/productModels");

const { creatCustomError } = require("../errors/custom-api");

const { BadRequestError, NotFoundError } = require("../errors");

const getAllProducts = async (req, res) => {
  try {
    // Assuming Pizza, Burger, Chinese, WrapsAndRolls, Beverages, Thalis, BestSellers are your models
    const pizzasPromise = Pizza.find({});
    const burgersPromise = Burger.find({});
    const chinesePromise = Chinese.find({});
    const wrapsAndRollsPromise = WrapsAndRolls.find({});
    const beveragesPromise = Beverages.find({});
    const thalisPromise = Thalis.find({});
    const bestSellersPromise = BestSellers.find({});

    // Use Promise.all to wait for all promises to resolve
    const [
      pizzas,
      burgers,
      chinese,
      wrapsAndRolls,
      beverages,
      thalis,
      bestSellers,
    ] = await Promise.all([
      pizzasPromise,
      burgersPromise,
      chinesePromise,
      wrapsAndRollsPromise,
      beveragesPromise,
      thalisPromise,
      bestSellersPromise,
    ]);

    // Combine the results from different collections into a single array
    let allProducts = [
      ...pizzas,
      ...burgers,
      ...chinese,
      ...wrapsAndRolls,
      ...beverages,
      ...thalis,
      ...bestSellers,
    ];

    // Helper function to extract numeric value from price string
    function extractNumericValue(priceString) {
      var temp =  parseFloat(priceString.replace(/[^\d.]/g, ""));
      return temp
    }

    if (req.query.price === "below") {
      const maxPrice = 100;
      allProducts = allProducts.filter(
        (product) => extractNumericValue(product.price) < maxPrice
      );
      
    } else if (req.query.price === "between") {
      const minPrice = 100;
      const maxPrice = 300;
      allProducts = allProducts.filter((product) => {
        const price = extractNumericValue(product.price);
        return price >= minPrice && price <= maxPrice;
      });
    } else if (req.query.price === "above") {
      const minPrice = 300;
      allProducts = allProducts.filter(
        (product) => extractNumericValue(product.price) > minPrice
      );
    }

    // Filter products based on category if category parameter is provided in the request query
    if (req.query.category) {
      const category = req.query.category.toLowerCase();
      allProducts = allProducts.filter(
        (product) => product.category.toLowerCase() === category
      );
    }

    if (req.query.sort === "priceDesc") {
        allProducts.sort((a, b) =>
          extractNumericValue(b.price) - extractNumericValue(a.price)
        );
    } else if (req.query.sort === "priceAsc") {
        allProducts.sort((a, b) =>
          extractNumericValue(a.price) - extractNumericValue(b.price)
        );
    }

    res.status(200).json({ allProducts, nbHits: allProducts.length });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProduct = async (req, res, next) => {
  try {
    const { id: productId } = req.params;

    // Assuming Pizza, Burger, Chinese, WrapsAndRolls, Beverages, Thalis, BestSellers are your models
    const collections = [
      Pizza,
      Burger,
      Chinese,
      WrapsAndRolls,
      Beverages,
      Thalis,
      BestSellers,
    ];

    // Use Promise.all to search for the product ID in all collections
    const products = await Promise.all(
      collections.map(async (model) => {
        return model.findById(productId);
      })
    );

    // Find the first non-null result (product) from the search
    const product = products.find((product) => product !== null);

    // Check if the product is found
    if (!product) {
      return next(creatCustomError(`No product with id ${productID}`, 404));
    }

    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProduct,
};
