
// import the coffee_data.js using the require syntax
const coffeeMenu = require("./coffee_data");

// Print an array of all the drinks on the menu.
const coffeeMenu = coffeeMenu.map((drinks) => drinks.name);
console.log(drinks.name);

//Print an array of drinks that cost 5 and under.
const cheapDrinks = coffeeMenu.filter((drink) => drink.price <= 5);
console.log(cheapDrinks);

//Print an array of drinks that are priced at an even number.
const evenPricedDrinks = coffeeMenu.filter((drink) => drink.price % 2 === 0);
console.log(evenPricedDrinks);

//Print the total if you were to order one of every drink.
const totalCost = coffeeMenu.reduce((acc, drink) => acc + drink.price, 0);
console.log(totalCost);

// Print an array with all the drinks that are seasonal.
const seasonalDrinks = coffeeMenu.filter((drink) => drink.seasonal);
console.log(seasonalDrinks);

// Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".
const seasonalDrinksWithBeans = seasonalDrinks.map((drink) => `${drink.name} with imported beans`);
console.log(seasonalDrinksWithBeans);
