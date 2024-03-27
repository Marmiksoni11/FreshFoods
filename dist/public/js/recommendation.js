// JavaScript code here
const slidesContainer = document.getElementById("slidesContainer");

// Function to set initial background color of body to white
function setInitialBackgroundColor() {
  // document.body.style.backgroundColor = '#ffffff'; // Set to white
}

// Fake food recommendations data for different moods
const fakeAPI = {
  "😊": [
    {
      name: "Cheerful Burger",
      image: "./images/Cheerful Burger.png",
      price: "₹459",
    },
    {
      name: "Joyful Pizza",
      image:
        "./images/png-clipart-junk-food-kosher-foods-pizza-fast-food-samosa-junk-food-food-recipe-thumbnail.png",
      price: "₹719",
    },
    {
      name: "Happy Pasta",
      image: "./images/happypasta.png",
      price: "₹599",
    },
    {
      name: "Burgerveggies",
      image: "./images/Burgerveggies.png",
      price: "₹459",
    },
    { name: "Pizza", image: "./images/Pizza.png", price: "₹719" },
    { name: "Pasta", image: "./images/Pasta.png", price: "₹599" },
  ],

  "😔": [
    {
      name: "Bland Salad",
      image: "./images/Bland-Salad.png",
      price: "₹459",
    },
    {
      name: "Plain Soup",
      image: "./images/Bland-Soup.png",
      price: "₹349",
    },
    {
      name: "Melancholic Fruit Bowl",
      image: "./images/Melancholic Fruit Bow.png",
      price: "₹279",
    },
    {
      name: "Dull Salad",
      image: "./images/Dull Salad.png",
      price: "₹459",
    },
    {
      name: "Bland Sop",
      image: "./images/Dull Salad.png",
      price: "₹349",
    },
    {
      name: "t Bowl",
      image: "./images/t-Bowl.png",
      price: "₹279",
    },
  ],
  "😋": [
    {
      name: "Delicious Tacos",
      image: "./images/Delicious Tacos.png",
      price: "₹599",
    },
    {
      name: "Savory Sushi",
      image: "./images/Savory Sushi.png",
      price: "₹749",
    },
    {
      name: "Decadent Ice Cream",
      image: "./images/ecadent Ice Cream.png",
      price: "₹262",
    },
    {
      name: "Tasty Tacos",
      image: "./images/Tasty Tacos.png",
      price: "₹599",
    },
    {
      name: "Special Sushi",
      image: "./images/shushi.png",
      price: "₹749",
    },
    {
      name: "Creamy Ice Cream",
      image: "./images/Creamy Ice Cream.png",
      price: "₹262",
    },
  ],
  "😌": [
    {
      name: "Cheese and Crackers",
      image: "./images/cheeseandcrackers.png",
      price: "₹210",
    },
    {
      name: "Grilled Cheese Sandwich",
      image: "./images/grilledSandwich.png",
      price: "₹340",
    },
    {
      name: "Caprese Salad",
      image: "./images/Capresesalad.png",
      price: "₹180",
    },
    {
      name: "biriyani image",
      image: "./images/biriyanirice.png",
      price: "₹543",
    },
    {
      name: "Vegetable Stir-Fry",
      image: "./images/vegetable_stir_fry.jpg",
      price: "₹345",
    },
  ],
};

// Function to change background color based on mood
function changeBackgroundColor(mood) {
  const moodColors = {
    "😊": "#ffe4b2", // Happy
    "😔": "#b2d8b2", // Sad
    "😋": "#b2cfff", // Excited
    "😌": "#ffe4e1", // Relaxed
  };
  const color = moodColors[mood];
  if (color) {
    // document.body.style.backgroundColor = color;
  }
}

// Function to get food recommendations based on mood
function getRecommendations(mood) {
  // Simulate API call with a delay
  setTimeout(() => {
    const foods = fakeAPI[mood];
    renderSlides(foods);
    changeBackgroundColor(mood); // Change background color based on mood
  }, 500); // Simulate 500ms delay
}

// Function to render food recommendation slides
function renderSlides(foods) {
  slidesContainer.innerHTML = "";
  foods.forEach((food) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    // Modify this based on the structure of your API response
    slide.innerHTML = `
            <img src="${food.image}" alt="${food.name}">
            <div class="details">
                <h3>${food.name}</h3>
                <p>${food.price}</p>
            </div>
        `;
    slidesContainer.appendChild(slide);
  });
}

let slideIndex = 0;

// Function to navigate to the next slide
function nextSlide() {
  slideIndex++;
  showSlide();
}

// Function to navigate to the previous slide
function prevSlide() {
  slideIndex--;
  showSlide();
}

// Function to show the current slide
function showSlide() {
  const slides = document.querySelectorAll(".slide");
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Fetch recommendations for initial mood (e.g., happy)
getRecommendations("😊"); // Initial mood (e.g., happy)
