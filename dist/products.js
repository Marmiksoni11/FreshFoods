const pizzaData = [
  {
    id:"fdsdfd",
    name: "Lithosphere",
    company: "Upper Crust",
    price: "₹600",
    image: "../images/pizza.jpg",
  },
  {
    id:"yutyu",
    name: "Margeritano Pizza",
    company: "Dominos Pizza",
    price: "₹350",
    image: "https://b.zmtcdn.com/data/dish_photos/0db/39e8f7a1cb3398d997ce415cc86210db.jpg",
  },
  {
    id:"nbbnnvnn",
    name: "Margerita",
    company: "RP's PIzzeria",
    price: "₹300",
    image: "https://b.zmtcdn.com/data/dish_photos/87a/dc31550a35c3682e0f01b36dc0a7887a.jpg",
  },
  {
    id:"werwrre",
    name: "Half Sized Pizza",
    company: "Oven Story Pizza",
    price: "₹450",
    image: "https://b.zmtcdn.com/data/dish_photos/65d/a819c99767aad4df7325195779aa165d.jpg?output-format=webp",
  },
  {
    id:"qwewqwe",
    name: "Cheese Veg Loaded",
    company: "Little French House",
    price: "₹400",
    image: "https://b.zmtcdn.com/data/dish_photos/547/c066f447f79e716251a830eea39d4547.jpg",
  },
  {
    id:"nghngnhn",
    name: "Italian Cheese Delight",
    company: "Sam's Pizza",
    price: "₹200",
    image: "https://b.zmtcdn.com/data/dish_photos/fe9/ec6f85a5aea551d55b28f3748b3b9fe9.jpg",
  },
  {
    id:"mlmlni",
    name: "Classic Basil and Olive Oil Margerita",
    company: "La Pino'z Pizza",
    price: "₹400",
    image: "https://b.zmtcdn.com/data/dish_photos/b83/fa9c88e1a09d703c7f9f4804790c8b83.jpg",
  },
  {
    id:"zxcbccvcxz",
    name: "Tandoori Veggies and Cheese",
    company: "Pizza Hut",
    price: "₹450",
    image: "https://b.zmtcdn.com/data/dish_photos/2f5/95b936ff3b26a8f92e8ab256fee762f5.jpg",
  }
];

const burgerData = [
  {
    id: "burger1",
    name: "Double Aaloo Tikky Burger",
    company: "Burger King",
    price: "₹150",
    image: "https://b.zmtcdn.com/data/dish_photos/fc0/28e42033758ab46493649e57035aafc0.jpg",
  },
  {
    id: "burger2",
    name: "Chicken Tikky",
    company: "Boss Burger",
    price: "₹70",
    image: "https://b.zmtcdn.com/data/dish_photos/72b/d5bc5b32dd177f5f207cad66556a572b.jpg",
  },
  {
    id: "burger3",
    name: "Veggie Delite Burger",
    company: "Tera Gourmet",
    price: "₹80",
    image: "https://b.zmtcdn.com/data/dish_photos/a5b/fe2d1e1c252df0ea62e89c752fa96a5b.jpg",
  },
  {
    id: "burger4",
    name: "Veg Tandoori Burger",
    company: "Harmony Restro Cafe",
    price: "₹80",
    image: "https://b.zmtcdn.com/data/dish_photos/120/5950f0c3bd2195f800c30f1a81043120.jpg",
  },
  {
    id: "burger5",
    name: "Cheesy Hot Burger",
    company: "Burgometery",
    price: "₹100",
    image: "https://b.zmtcdn.com/data/dish_photos/35c/bae6f388c9053b6cc2217b984c2b035c.jpg",
  },
  {
    id: "burger6",
    name: "Saucyy Aaloo Mania",
    company: "The HOCCO Kitchen",
    price: "₹50",
    image: "https://b.zmtcdn.com/data/dish_photos/7bd/38f3a8f6ef59e195c0482962f43057bd.jpg",
  },
  {
    id: "burger7",
    name: "Aaloo Tikky",
    company: "Tummy Fillers",
    price: "₹130",
    image: "https://b.zmtcdn.com/data/dish_photos/3d5/3bb1151068686363c50d993b7869b3d5.jpg",
  },
  {
    id: "burger8",
    name: "McGrill Panini-Burger",
    company: "Mc Donald's",
    price: "₹100",
    image: "https://b.zmtcdn.com/data/dish_photos/de9/2395f3d24ed7ca6fc763e40806cc4de9.jpg",
  },
];

const thaliData = [
  {
    id: "thali1",
    name: "North Indian Lunch",
    company: "Thali & Co.",
    price: "₹100",
    image: "https://b.zmtcdn.com/data/dish_photos/9a3/0348b6f075f6b7fd2da7c440b2af29a3.jpg",
  },
  {
    id: "thali2",
    name: "Punjabi Thali",
    company: "Gwalia Sweets and FastFood",
    price: "₹150",
    image: "https://b.zmtcdn.com/data/pictures/5/18808035/60a335e166fe3bef5adfcf464532ddea_o2_featured_v2.jpg",
  },
  {
    id: "thali3",
    name: "Colors Of India (Large)",
    company: "Gwalbhog",
    price: "₹600",
    image: "https://b.zmtcdn.com/data/pictures/3/19489313/9a2965589a2604c72e55ce19e2d6bedf_o2_featured_v2.jpg",
  },
  {
    id: "thali4",
    name: "Gujrati Thali",
    company: "Hari Om Food",
    price: "₹280",
    image: "https://b.zmtcdn.com/data/pictures/7/18541207/f12d075a5019f1282592b9c446777482_o2_featured_v2.jpg",
  },
  {
    id: "thali5",
    name: "Punjabi Lunch",
    company: "Kabir Restaurant",
    price: "₹200",
    image: "https://b.zmtcdn.com/data/pictures/9/111899/eb1de7b4b650179ee951a6e8c7051d53_featured_v2.jpg",
  },
  {
    id: "thali6",
    name: "Mix Veg Thali",
    company: "Topaz Restaurant",
    price: "₹200",
    image: "https://b.zmtcdn.com/data/pictures/4/110144/61c3e30f08aaa1c85d51fd1132324061_o2_featured_v2.jpg",
  },
  {
    id: "thali7",
    name: "Gujarati Lunch",
    company: "Gopi Dining Hall",
    price: "₹300",
    image: "https://b.zmtcdn.com/data/dish_photos/086/ef07c366413e4dad8e49005a20537086.jpg",
  },
  {
    id: "thali8",
    name: "Punjabi Lunch with Dessert and Starter",
    company: "Dilli ki Rasoi",
    price: "₹400",
    image: "https://b.zmtcdn.com/data/dish_photos/086/ef07c366413e4dad8e49005a20537086.jpg",
  },
];

const ChineseData = [
  {
    id: "appetizer1",
    name: "Chilly Paneer",
    company: "Space Dragon",
    price: "₹100",
    image: "https://b.zmtcdn.com/data/dish_photos/29b/128fce1a3e72ab0d53978dce0883f29b.jpg?output-format=webp",
  },
  {
    id: "appetizer2",
    name: "Veg 65",
    company: "Meritorious",
    price: "₹100",
    image: "https://b.zmtcdn.com/data/dish_photos/5f9/3daa867752242c1edf2d4ea4076f75f9.jpg?output-format=webp",
  },
  {
    id: "appetizer3",
    name: "Hakka Noodle & Fried Rice",
    company: "Topaz",
    price: "₹300",
    image: "https://b.zmtcdn.com/data/dish_photos/3cf/525d5fa30e721a860831499bdbeb53cf.jpg?output-format=webp",
  },
  {
    id: "appetizer4",
    name: "Manchoorian Fried Rice",
    company: "Hari Om Food",
    price: "₹280",
    image: "https://b.zmtcdn.com/data/dish_photos/c85/845ff1ccd2760d3d461bdd7dbcbd1c85.jpg?output-format=webp",
  },
  {
    id: "appetizer5",
    name: "Medium Gravy Manchoorian",
    company: "Kabir Restaurant",
    price: "₹150",
    image: "https://b.zmtcdn.com/data/dish_photos/03f/69ca892d52b62222ba85206a9f21d03f.jpg",
  },
  {
    id: "appetizer6",
    name: "Dry Manchoorian",
    company: "Topaz Restaurant",
    price: "₹200",
    image: "https://b.zmtcdn.com/data/dish_photos/50b/f56d1ac22f7ff42dce57f9ccc125b50b.jpg",
  },
  {
    id: "appetizer7",
    name: "Mix Veg Paneer Toast",
    company: "Chinese Wok",
    price: "₹200",
    image: "https://b.zmtcdn.com/data/dish_photos/cc0/3029b75a5c6d3e134a75398c75602cc0.jpg",
  },
  {
    id: "appetizer8",
    name: "Chinese Fried rice",
    company: "Chinese Wok",
    price: "₹300",
    image: "https://b.zmtcdn.com/data/dish_photos/fbe/3b36dc5ae7d5a53f6a8b2c0f06275fbe.jpg",
  },
];

const wrapsAndRollsData = [
  {
    id: "wrap1",
    name: "Chilly Cheese Corn",
    company: "HL Frankie",
    price: "₹150",
    image: "https://b.zmtcdn.com/data/dish_photos/066/2f3f482a1935235f4ac89d8e1223e066.jpg",
  },
  {
    id: "wrap2",
    name: "Veg Paneer",
    company: "Fasos Wraps & Rolls",
    price: "₹200",
    image: "https://b.zmtcdn.com/data/dish_photos/eb5/173ab54c0e1ea124413be80e09545eb5.jpg",
  },
  {
    id: "wrap3",
    name: "Teekha Chaska",
    company: "Fasos Wraps & Rolls",
    price: "₹250",
    image: "https://b.zmtcdn.com/data/dish_photos/35f/e33b232690d715d740431f779291335f.jpg",
  },
  {
    id: "wrap4",
    name: "Manchoorian Corn",
    company: "Frankie On Fire",
    price: "₹280",
    image: "https://b.zmtcdn.com/data/dish_photos/5ce/e6c796fc32807004bb0273dfb43175ce.jpg",
  },
  {
    id: "wrap5",
    name: "Aloo Patty Wrap",
    company: "Burger Farm",
    price: "₹150",
    image: "https://b.zmtcdn.com/data/dish_photos/bb5/911ffe4dc354c9ce4c6fa8676124bbb5.png",
  },
  {
    id: "wrap6",
    name: "Aloo Mix veg Wrap",
    company: "Terra Food Company",
    price: "₹250",
    image: "https://b.zmtcdn.com/data/dish_photos/091/c4495c0821c9b7e5adef75d12833e091.jpg",
  },
  {
    id: "wrap7",
    name: "Patty Roll",
    company: "Marky Momos",
    price: "₹200",
    image: "https://b.zmtcdn.com/data/dish_photos/166/66945866863ac81ce098e0b9e6b35166.jpg",
  },
  {
    id: "wrap8",
    name: "Veg Roll",
    company: "Chinese Wok",
    price: "₹200",
    image: "https://b.zmtcdn.com/data/pictures/9/20789629/0248bfb1c77335bf8e8cbca7dfc71d4d_o2_featured_v2.jpg",
  },
];

const beveragesData = [
  {
    id: "beverage1",
    name: "Mango Milkshake",
    company: "The Food Truck",
    price: "₹100",
    image: "https://b.zmtcdn.com/data/dish_photos/aed/92f0b337c727412afbf6eb8c8beedaed.jpg?output-format=webp",
  },
  {
    id: "beverage2",
    name: "Swig Jeera Masala",
    company: "Oven Story Pizza",
    price: "₹60",
    image: "https://b.zmtcdn.com/data/dish_photos/78a/25b016a4f3021dad1923cf8d39f2378a.jpg?output-format=webp",
  },
  {
    id: "beverage3",
    name: "Bournvita",
    company: "Dairy Den",
    price: "₹30",
    image: "https://b.zmtcdn.com/data/dish_photos/c04/e0fbcf13848846318ec91497860fbc04.jpg",
  },
  {
    id: "beverage4",
    name: "Masala Chhaas",
    company: "Shri Marutinandan Kathiyawadi Restaurant",
    price: "₹25",
    image: "https://b.zmtcdn.com/data/dish_photos/090/590aed7dd3169ad6aeb213a4e76b2090.jpg?output-format=webp",
  },
  {
    id: "beverage5",
    name: "Simple Lassi",
    company: "Chhaswala",
    price: "₹30",
    image: "https://b.zmtcdn.com/data/dish_photos/221/ffba29abc2f62367d11d7cb1249be221.jpg",
  },
  {
    id: "beverage6",
    name: "Iced Caffe Latte",
    company: "Starbucks",
    price: "₹300",
    image: "https://b.zmtcdn.com/data/dish_photos/057/32632f33976aede26beb407156b51057.jpg",
  },
  {
    id: "beverage7",
    name: "Masala Chai",
    company: "Rajwadi",
    price: "₹20",
    image: "https://b.zmtcdn.com/data/dish_photos/378/71067087022f75691d602f8961b3e378.jpg",
  },
  {
    id: "beverage8",
    name: "Bournvita",
    company: "Rajwadi",
    price: "₹30",
    image: "https://b.zmtcdn.com/data/dish_photos/378/71067087022f75691d602f8961b3e378.jpg",  // Duplicate image for "Bournvita"
  },
];


const bestsellerArray = [
  {
    id: "bestseller1",
    name: "Double Aaloo Tikky Burger",
    company: "Burger King",
    price: "₹150",
    image: "/images/burger_3.JPG",
  },
  {
    id: "bestseller2",
    name: "Veg Ramen",
    company: "Space Dragon",
    price: "₹200",
    image: "/images/gourmet-ramen-noodles-steaming-bowl-generated-by-ai.jpg",
  },
  {
    id: "bestseller3",
    name: "Chicken Tikky",
    company: "Boss Burger",
    price: "₹70",
    image: "/images/burger_1.JPG",
  },
  {
    id: "bestseller4",
    name: "Cheese Veg Loaded",
    company: "Little French House",
    price: "₹400",
    image: "/images/traditional-supreme-pizza-wooden-table.jpg",
  },
  {
    id: "bestseller5",
    name: "Veggie Delite Burger",
    company: "Tera Gourmet",
    price: "₹80",
    image: "/images/burger_2.JPG",
  },
  {
    id: "bestseller6",
    name: "North Indian Lunch",
    company: "Thali & Co.",
    price: "₹100",
    image: "/images/Saladthali.jpg",
  },
];


export {
  pizzaData,
  burgerData,
  thaliData,
  ChineseData,
  wrapsAndRollsData,
  beveragesData,
  bestsellerArray
};