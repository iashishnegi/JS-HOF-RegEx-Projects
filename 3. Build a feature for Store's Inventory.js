// 3. Build a feature for Store's Inventory.
// Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
// program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
// use the map higher-order function to create a new object with the converted prices in Rupees.

// Store object with prices in USD
var store = {
  item1: 10,
  item2: 20,
  item3: 30,
};

// Conversion rate from USD to INR
var exchangeRate = 80;

// Function to convert prices from USD to INR
function convertToRupees(price) {
  return price * exchangeRate;
}

// Use map to create a new object with prices in Rupees
var convertedStore = Object.fromEntries(
  Object.entries(store).map(([item, price]) => [item, convertToRupees(price)])
);

// Print the converted store object
console.log(convertedStore);
