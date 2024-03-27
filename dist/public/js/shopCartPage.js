
import {
    pizzaData,
    burgerData,
    thaliData,
    ChineseData,
    wrapsAndRollsData,
    beveragesData,
    bestsellerArray
} from './products.js';


let basket = JSON.parse(localStorage.getItem("data")) || [];

console.log(basket)

function removeItem(itemId) {
    // Find the index of the item to remove in the basket array
    const itemIndex = basket.findIndex(item => item.id === itemId);
  
    if (itemIndex !== -1) {
      // Remove the item from the basket array
      basket.splice(itemIndex, 1);
  
      // Update the local storage with the modified basket
      localStorage.setItem('data', JSON.stringify(basket));
  
      // Regenerate the items in the basket after removal
      generateItems();
  
      // Update the total
      updateTotal();
    } else {
      console.error("Item not found for removal: " + itemId);
    }
  }

  
let generateItems = () => {
    const itemWrapper = document.getElementById("item-Wrapper");

    // Clear the previous items in the itemWrapper
    itemWrapper.innerHTML = '';

   
    // Loop through the items in the basket
    basket.forEach(basketItem => {
        // Initialize the product and category as null
        let product = null;

        // Handle "bestseller" category as a special case
        if (basketItem.id.startsWith('bestseller')) {
            product = bestsellerArray.find(product => product.id === basketItem.id);
        } else {
            // Loop through other data arrays to find the matching product
            [pizzaData, burgerData, thaliData, ChineseData, wrapsAndRollsData, beveragesData].some(dataArray => {
                product = dataArray.find(product => product.id === basketItem.id);
                if (product) {
                    return true; // Break out of the loop once a match is found
                }
            });
        }
        if (product) {

            const priceNumeric = parseFloat(product.price.replace('₹', ''));

            // Now you can calculate the total price    
            const totalPrice = priceNumeric * basketItem.item;
            
            // console.log(totalPrice)
            
            // Generate HTML for the item and append it to the itemWrapper
            itemWrapper.innerHTML += `
            <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div class="flex w-2/5"> 
              <div class="w-24 overflow-hidden">
                <img class="h-24 w-24 transform hover:scale-125 cursor-pointer transition-transform " src="${product.image}" alt="">
              </div>
              <div class="flex flex-col justify-center ml-4 flex-grow">
                <span class="font-bold  text-base">${product.name}</span>
                <span class="text-red-500 mt-5 text-sm">${product.company}</span>
              </div>
            </div>
            <div class="flex justify-center w-1/5">
            <div class="buttons">
              <i onclick="decreament('${basketItem.id}')" class="bi bi-dash-lg"></i>
              <div id="${basketItem.id}" class="quantity">0</div>
              <i onclick="increament('${basketItem.id}')" class="bi bi-plus-lg"></i>
            </div>
            </div>
            <span class="text-center w-1/5 font-semibold text-sm">${product.price}</span>
            <span class="text-center w-1/5 font-semibold text-sm">₹${totalPrice}</span>
          </div>`;

          
        } else {
            // Handle the case when the product with the specified ID is not found
            console.error("Product not found for ID: " + basketItem.id);
        }
    });

    updateTotal();
};

generateItems();

 export function updateTotal() {

  let totalItems = 0;
  let totalCost = 0;
  
  
  basket.forEach(basketItem => {
  let product = null;
  
          // Handle "bestseller" category as a special case
          if (basketItem.id.startsWith('bestseller')) {
              product = bestsellerArray.find(product => product.id === basketItem.id);
          } else {
              // Loop through other data arrays to find the matching product
              [pizzaData, burgerData, thaliData, ChineseData, wrapsAndRollsData, beveragesData].some(dataArray => {
                  product = dataArray.find(product => product.id === basketItem.id);
                  if (product) {
                      return true; // Break out of the loop once a match is found
                  }
              });
          }
          if (product) {
  
              const priceNumeric = parseInt(product.price.replace('₹', ''));
  
              // Now you can calculate the total price    
              const totalPrice = priceNumeric * basketItem.item;
              
              totalItems += basketItem.item;
              totalCost += totalPrice;
          } else {
              console.error("Product not found for ID: " + basketItem.id);
          }
      });
    
      document.getElementById('total-items-ShoppingCart').textContent = totalItems + " Items";
      document.getElementById('total-items-ShoppingCart2').textContent = totalItems + " Items";
      const shippingFee = 10; // 10 rupees shipping fee per item
      totalCost += shippingFee * totalItems;
      document.getElementById('total-cost').textContent = '₹' + totalCost.toFixed(2);
    
    }


    // new comment to check token

    // new change