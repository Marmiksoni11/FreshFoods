let basket = JSON.parse(localStorage.getItem("data")) || [];

//! shopping cart function

//* Initialize the cart total
let cartTotal = 0;

function initializePage() { 
    // Update quantity elements on the page based on the data in the basket
    basket.forEach(item => {
        const quantityElement = document.getElementById(item.id); 
        if (quantityElement) {
            quantityElement.textContent = item.item.toString(); //! take the item field for the this item in the loop it could also be written as element.item.toString()
        }
    });

    // Update the cart total
    updateCartTotal();
}

// Call the initializePage function when the page loads
window.addEventListener('load', initializePage);


// Increment function
function increament(elementId) {

    // Get the current quantity
    const quantityElement = document.getElementById(elementId);
    let currentQuantity = parseInt(quantityElement.textContent);

    // Increment the quantity
    currentQuantity++;
    // Update the quantity element
    quantityElement.textContent = currentQuantity;

    // Check if the item is already in the basket
    let selectedItem = basket.find((item) => item.id === elementId);

    if (selectedItem) {
        // If the item is in the basket, update the quantity
        selectedItem.item = currentQuantity;
    } else {
        // If the item is not in the basket, add it
        basket.push({
            id: elementId,
            item: currentQuantity
        });
    }
    console.log(basket)


    // Update the cart total
    cartTotal++;

    updateCartTotal();

    // localStorage.setItem("data", JSON.stringify(basket));

    localStorage.setItem("data", JSON.stringify(basket));
}

// Decrement function
function decreament(elementId) {
    // Get the current quantity
    const quantityElement = document.getElementById(elementId);

    let currentQuantity = parseInt(quantityElement.textContent);
   

    // Ensure the quantity doesn't go below zero
    if (currentQuantity > 0) {
        currentQuantity--;

        // Check if the item is already in the basket
        let selectedItem = basket.find((item) => item.id === elementId);

        if (selectedItem) {
            // If the item is in the basket, update the quantity
            selectedItem.item = currentQuantity;
            if (currentQuantity === 0) {
                // If the quantity reaches 0, remove the item from the basket
                basket = basket.filter((item) => item.id !== elementId);
            }
        }
        console.log(basket)

        // Update the cart total
        cartTotal--;

        updateCartTotal();
        localStorage.setItem("data", JSON.stringify(basket));
    }

    // Update the quantity element
    quantityElement.textContent = currentQuantity;
  
}

// Function to update the cart total in the HTML
function updateCartTotal() {
    const cartTotalElement = document.getElementById('cart-total');
    if (cartTotalElement) {
    // Calculate the cart total based on the items in the basket
    const total = basket.reduce((acc, item) => acc + item.item, 0);
    
    cartTotalElement.textContent = total.toString();

    // Check if the cart total is zero and add/remove the "hidden" class accordingly
    if (total === 0) {
        cartTotalElement.classList.add('hidden');
    } else {
        cartTotalElement.classList.remove('hidden');
    }

}

}
// updateTotal();
// Initialize the page on load
initializePage();




//! Navbar scroll func 

window.onscroll = function () { myFunction(); };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.scrollY >= sticky && window.scrollY <= 1300) {
        // console.log(window.scrollY);
        navbar.classList.add("sticky");
        navbar.style.opacity = 1;
    } else {
        navbar.classList.remove("sticky");
        navbar.style.transition = "opacity 0.5s ease-out";
        navbar.style.opacity = 0;
    }
}



  

//! Slider  original: 
 

//* original :

// const categoryBox = document.querySelector('#categoryBox');
// const nxtBtn = document.querySelector('.nxt-btn');
// const preBtn = document.querySelector('.pre-btn');
// const categoryWidth = document.querySelector('.category').offsetWidth;

// // Adjust the scroll amount (you can make it smaller for smoother scrolling)
// const scrollAmount = 1000; // Adjust as needed

// nxtBtn.addEventListener('click', () => {
//     categoryBox.scrollBy({ left: scrollAmount, behavior: 'smooth' });
// });

// preBtn.addEventListener('click', () => {
//     categoryBox.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
// });

//* automatic scroll on page load + click functions

//! Slider  main:

const categoryBox = document.querySelector('#categoryBox');
const nxtBtn = document.querySelector('.nxt-btn');
const preBtn = document.querySelector('.pre-btn');
const categoryWidth = document.querySelector('.category').offsetWidth;

// Adjust the scroll amount
const scrollAmount = categoryWidth + 1000; // Adjust as needed
// Adjust the scroll duration (speed)
const scrollDuration = 10000; // Adjust as needed

function scrollToTheEnd() {
    categoryBox.scroll({
        left: categoryBox.scrollWidth - categoryBox.clientWidth,
        behavior: 'smooth',
        duration: scrollDuration
    });
}

function scrollToStart() {
    categoryBox.scroll({
        left: 0,
        behavior: 'smooth',
        duration: scrollDuration
    });
}

// Automatically scroll to the end after a 1-second delay
window.addEventListener('load', () => {
    setTimeout(() => {
        scrollToTheEnd();

        // After another delay, scroll back to the initial position
        setTimeout(() => {
            scrollToStart();
        }, 2000); // Adjust the second delay (in milliseconds) as needed
    }, 2000); // Initial delay of 1 second (1000 milliseconds)
});

// Click event for the "Next" button
nxtBtn.addEventListener('click', () => {
    categoryBox.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

// Click event for the "Previous" button
preBtn.addEventListener('click', () => {
    categoryBox.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});


















//  mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm