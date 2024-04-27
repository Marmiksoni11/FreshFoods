const terms = [
  "Ant-Man",
  "Aquaman",
  "Asterix",
  "The Atom",
  "The Avengers",
  "Batgirl",
  "Batman",
  "Batwoman",
  "Black Canary",
  "Black Panther",
  "Captain America",
  "Captain Marvel",
  "Catwoman",
  "Conan the Barbarian",
  "Daredevil",
  "The Defenders",
  "Doc Savage",
  "Doctor Strange",
  "Elektra",
  "Fantastic Four",
  "Ghost Rider",
  "Green Arrow",
  "Green Lantern",
  "Guardians of the Galaxy",
  "Hawkeye",
  "Hellboy",
  "Incredible Hulk",
  "Iron Fist",
  "Iron Man",
  "Marvelman",
  "Robin",
  "The Rocketeer",
  "The Shadow",
  "Spider-Man",
  "Sub-Mariner",
  "Supergirl",
  "Superman",
  "Teenage Mutant Ninja Turtles",
  "Thor",
  "The Wasp",
  "Watchmen",
  "Wolverine",
  "Wonder Woman",
  "X-Men",
  "Zatanna",
  "Zatara",
];


const pizzaData = [
    { id: "fdsdfd", name: "Lithosphere", category: "pizza" },
    { id: "yutyu", name: "Margeritano Pizza", category: "pizza" },
    { id: "nbbnnvnn", name: "Margerita", category: "pizza" },
    { id: "werwrre", name: "Half Sized Pizza", category: "pizza" },
    { id: "qwewqwe", name: "Cheese Veg Loaded", category: "pizza" },
    { id: "nghngnhn", name: "Italian Cheese Delight", category: "pizza" },
    { id: "mlmlni", name: "Classic Basil and Olive Oil Margerita", category: "pizza" },
    { id: "zxcbccvcxz", name: "Tandoori Veggies and Cheese", category: "pizza" },
  ];
  
  const burgerData = [
    { id: "burger1", name: "Double Aaloo Tikky Burger", category: "burger" },
    { id: "burger2", name: "Chicken Tikky", category: "burger" },
    { id: "burger3", name: "Veggie Delite Burger", category: "burger" },
    { id: "burger4", name: "Veg Tandoori Burger", category: "burger" },
    { id: "burger5", name: "Cheesy Hot Burger", category: "burger" },
    { id: "burger6", name: "Saucyy Aaloo Mania", category: "burger" },
    { id: "burger7", name: "Aaloo Tikky", category: "burger" },
    { id: "burger8", name: "McGrill Panini-Burger", category: "burger" },
  ];
  
  const thaliData = [
    { id: "thali1", name: "North Indian Lunch", category: "thali" },
    { id: "thali2", name: "Punjabi Thali", category: "thali" },
    { id: "thali3", name: "Colors Of India (Large)", category: "thali" },
    { id: "thali4", name: "Gujrati Thali", category: "thali" },
    { id: "thali5", name: "Punjabi Lunch", category: "thali" },
    { id: "thali6", name: "Mix Veg Thali", category: "thali" },
    { id: "thali7", name: "Gujarati Lunch", category: "thali" },
    { id: "thali8", name: "Punjabi Lunch with Dessert and Starter", category: "thali" },
  ];
  
  const ChineseData = [
    { id: "appetizer1", name: "Chilly Paneer", category: "chinese" },
    { id: "appetizer2", name: "Veg 65", category: "chinese" },
    { id: "appetizer3", name: "Hakka Noodle & Fried Rice", category: "chinese" },
    { id: "appetizer4", name: "Manchoorian Fried Rice", category: "chinese" },
    { id: "appetizer5", name: "Medium Gravy Manchoorian", category: "chinese" },
    { id: "appetizer6", name: "Dry Manchoorian", category: "chinese" },
    { id: "appetizer7", name: "Mix Veg Paneer Toast", category: "chinese" },
    { id: "appetizer8", name: "Chinese Fried rice", category: "chinese" },
  ];
  
  const wrapsAndRollsData = [
    { id: "wrap1", name: "Chilly Cheese Corn", category: "wrapsAndRolls" },
    { id: "wrap2", name: "Veg Paneer", category: "wrapsAndRolls" },
    { id: "wrap3", name: "Teekha Chaska", category: "wrapsAndRolls" },
    { id: "wrap4", name: "Manchoorian Corn", category: "wrapsAndRolls" },
    { id: "wrap5", name: "Aloo Patty Wrap", category: "wrapsAndRolls" },
    { id: "wrap6", name: "Aloo Mix veg Wrap", category: "wrapsAndRolls" },
    { id: "wrap7", name: "Patty Roll", category: "wrapsAndRolls" },
    { id: "wrap8", name: "Veg Roll", category: "wrapsAndRolls" },
]

const beveragesData = [
    { id: "beverage1", name: "Mango Milkshake", category: "beverages" },
    { id: "beverage2", name: "Swig Jeera Masala", category: "beverages" },
    { id: "beverage3", name: "Bournvita", category: "beverages" },
    { id: "beverage4", name: "Masala Chhaas", category: "beverages" },
    { id: "beverage5", name: "Simple Lassi", category: "beverages" },
    { id: "beverage6", name: "Iced Caffe Latte", category: "beverages" },
    { id: "beverage7", name: "Masala Chai", category: "beverages" },
    { id: "beverage8", name: "Bournvita", category: "beverages" },
  ];
  
  const bestsellerArray = [
    { id: "bestseller1", name: "Double Aaloo Tikky Burger", category: "bestSellers" },
    { id: "bestseller2", name: "Veg Ramen", category: "bestSellers" },
    { id: "bestseller3", name: "Chicken Tikky", category: "bestSellers" },
    { id: "bestseller4", name: "Cheese Veg Loaded", category: "bestSellers" },
    { id: "bestseller5", name: "Veggie Delite Burger", category: "bestSellers" },
    { id: "bestseller6", name: "North Indian Lunch", category: "bestSellers" },
  ];
  
    
const newTerms = [

    // Categories
    "Burgers",
    "Pizzas",
    "Thalis",
    "Wraps",
    "Rolls",
    "Beverages",
    "Chinese",
    "Best Sellers",
    
    // Miscallaneous
    "Drinks",
    "Noodles",
    "Manchurian",
    
    // Products
    "Lithosphere",
    "Margeritano Pizza",
    "Margerita",
    "Half Sized Pizza",
    "Cheese Veg Loaded",
    "Italian Cheese Delight",
    "Classic Basil and Olive Oil Margerita",
    "Tandoori Veggies and Cheese",
    "Double Aaloo Tikky Burger",
    "Chicken Tikky",
    "Veggie Delite Burger",
    "Veg Tandoori Burger",
    "Cheesy Hot Burger",
    "Saucyy Aaloo Mania",
    "Aaloo Tikky",
    "McGrill Panini-Burger",
    "North Indian Lunch",
    "Punjabi Thali",
    "Colors Of India (Large)",
    "Gujrati Thali",
    "Punjabi Lunch",
    "Mix Veg Thali",
    "Gujarati Lunch",
    "Punjabi Lunch with Dessert and Starter",
    "Chilly Paneer",
    "Veg 65",
    "Hakka Noodle & Fried Rice",
    "Manchoorian Fried Rice",
    "Medium Gravy Manchoorian",
    "Dry Manchoorian",
    "Mix Veg Paneer Toast",
    "Chinese Fried rice",
    "Chilly Cheese Corn",
    "Veg Paneer",
    "Veg Ramen",
    "Teekha Chaska",
    "Manchoorian Corn",
    "Aloo Patty Wrap",
    "Aloo Mix veg Wrap",
    "Patty Roll",
    "Veg Roll",
    "Mango Milkshake",
    "Swig Jeera Masala",
    "Bournvita",
    "Masala Chhaas",
    "Simple Lassi",
    "Iced Caffe Latte",
    "Masala Chai",
    
  ];
  
const suggest = document.querySelector(".input-suggest");

const onSearch = (e) => {
  const data = e.target.value;
  const foundTerm = newTerms.filter((item) =>
    item.toLowerCase().startsWith(data.toLowerCase())
  );

  if (data.length && foundTerm.length > 0) {
    suggest.classList.remove("hidden");

    const listItems = foundTerm
      .map((item) => {
        return `<li class="pl-8 p-2 relative cursor-pointer">
            <b>${data}</b>${item.substring(data.length)}
            </li>`;
      })
      .join("");

    suggest.innerHTML = listItems;

   const lol =  suggest.querySelectorAll("li").forEach((listItem) => {
     listItem.addEventListener("click", (clickEvent) => {
        // const clickedTerm = clickEvent.target.textContent.toLowerCase();
        const temp = listItem.outerHTML;
        const tempElement = document.createElement('div');
        tempElement.innerHTML = temp;
        const textContent = tempElement.textContent.trim();
        const selected = textContent.toLowerCase()
        // document.querySelector(".input-field").value = clickedTerm.trim();
        document.querySelector(".input-field").value = selected;
        var term =  selected.trim()
        const checkCat = checkCategory(term)
        console.log('checkCat',checkCat);
        navigate(checkCat)
        suggest.classList.add("hidden");
      });
      
    });
    const promises = Promise.all(lol)
  } else {
    suggest.classList.add("hidden");
  }
};

document.querySelector(".input-field").addEventListener("keyup", onSearch);

const checkCategory = (clickedTerm) => {

    const categoryMatch = [
        "Burgers",
        "Pizzas",
        "Thalis",
        "Wraps",
        "Rolls",
        "Beverages",
        "Chinese",
        "Best Sellers"
      ].find(category => category.toLowerCase() === clickedTerm.toLowerCase());

    if (categoryMatch) return categoryMatch;

    const pizzaItem = pizzaData.find(item => item.name.toLowerCase() === clickedTerm.toLowerCase());
    if (pizzaItem) return pizzaItem.category;

    const burgerItem = burgerData.find(item => item.name.toLowerCase() === clickedTerm.toLowerCase());
    if (burgerItem) return burgerItem.category;

    const thaliItem = thaliData.find(item => item.name.toLowerCase() === clickedTerm.toLowerCase());
    if (thaliItem) return thaliItem.category;

    const chineseItem = ChineseData.find(item => item.name.toLowerCase() === clickedTerm.toLowerCase());
    if (chineseItem) return chineseItem.category;

    const wrapsAndRollsItem = wrapsAndRollsData.find(item => item.name.toLowerCase() === clickedTerm.toLowerCase());
    if (wrapsAndRollsItem) return wrapsAndRollsItem.category;

    const beveragesItem = beveragesData.find(item => item.name.toLowerCase() === clickedTerm.toLowerCase());
    if (beveragesItem) return beveragesItem.category;
    
    const bestSellerItem = bestsellerArray.find(item => item.name.toLowerCase() === clickedTerm.toLowerCase());
    if (bestSellerItem) return bestSellerItem.category;

    switch (clickedTerm.toLowerCase()) {
        case "drinks":
          return "beverages";
        case "noodles":
        case "manchurian":
          return "chinese";
        default:
          return null;
    }
    // return null;
  };
  


  const navigate = (categoryMatch) => {
    if (categoryMatch === "Best Sellers" || categoryMatch === "bestSellers") {
        window.location.href = `http://localhost:3020/home.html#bestSellers`;
        return;
      } 

      if (categoryMatch === "Burgers" || categoryMatch === "burger" ) {
        window.location.href = `http://localhost:3020/Burgers.html`;
        return;
      } 

      if (categoryMatch === "Pizzas" || categoryMatch === "pizza") {
        window.location.href = `http://localhost:3020/pizzas.html`;
        return;
      } 

      if (categoryMatch === "Thalis"  || categoryMatch === "thali") {
        window.location.href = `http://localhost:3020/Thali.html`;
        return;
      } 

      if (categoryMatch === "Wraps" || categoryMatch === "Rolls"  || categoryMatch === "wrapsAndRolls")  {
        window.location.href = `http://localhost:3020/wrapsNrolls.html`;
        return;
      } 

      if (categoryMatch === "Beverages"  || categoryMatch === "beverages" )  {
        window.location.href = `http://localhost:3020/Beverages.html`;
        return;
      }

      if (categoryMatch === "Chinese"  || categoryMatch === "chinese")  {
        window.location.href = `http://localhost:3020/chinese.html`;
        return;
      } 
  }

