
import {   
  pizzaData,
  burgerData,
  thaliData,
  ChineseData,
  wrapsAndRollsData,
  beveragesData, } from './products.js';


// Function to generate HTML content for a page
function generatePageContent(data) {
  const itemWrapper = document.getElementById('itemWrapper');
  return (itemWrapper.innerHTML = data.map((x)=>{     
   //! adding the keys inside x so no need to write x.name x.comany etc .. 
          let {id, image, name, company, price} = x;
          return `
          <div id="product-id-${id}" class="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block transform hover:scale-125 cursor-pointer transition-transform "
              src="${image}">
          </a>
          <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">${company}</h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">${name}</h2>
            <div class="buttons">
            <p class="mt-1">${price}</p>
               <i onclick="decreament('${id}')" class="bi bi-dash-lg ml-52"></i>
               <div id="${id}" class="quantity">0</div>
               <i onclick="increament('${id}')" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>`
        
      }).join(""));
}

// Function to initialize a specific page
function initPage(data) {
  // Retrieve the page element where you want to inject content
  const pageElement = document.getElementById('itemWrapper');
  
  // Generate and inject HTML content
  if (pageElement) {
    const content = generatePageContent(data);
    pageElement.innerHTML = content;
  }
}

// Initialize the appropriate page based on the page identifier
document.addEventListener('DOMContentLoaded', function () {
  const pageId = document.body.getAttribute('data-page-id');

  switch (pageId) {
    case 'pizza-page':
      initPage(pizzaData);
      break;
    case 'burger-page':
      initPage(burgerData);
      break;
    case 'thali-page':
      initPage(thaliData);
      break;
    case 'chinese-page':
      initPage(ChineseData);
      break;
    case 'wrapsAndRolls-page':
      initPage(wrapsAndRollsData);
      break;
    case 'beverages-page':
      initPage(beveragesData);
      break;
    // Add more cases for other pages as needed
  }
});
