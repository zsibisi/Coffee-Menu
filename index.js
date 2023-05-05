
// import the coffee_data.js using the require syntax
const coffeeMenu = require("./coffee_data");
console.log("Coffee Menu:");
console.table(coffeeMenu);

// Print an array of all the drinks on the menu.
const drinkNames = coffeeMenu.map((drink) => drink.name);
console.log("Drink Names:");
console.table(drinkNames);

//Print an array of drinks that cost 5 and under.
const cheapDrinks = coffeeMenu.filter((drink) => drink.price <= 5);
console.log("Cheap Drinks:");
console.table(cheapDrinks);

//Print an array of drinks that are priced at an even number.
const evenPricedDrinks = coffeeMenu.filter((drink) => drink.price % 2 === 0);
console.log("Even-Priced Drinks:");
console.table(evenPricedDrinks);


//Print the total if you were to order one of every drink.
const totalCost = coffeeMenu.reduce((acc, drink) => acc + Number(drink.price), 0);
console.log("Total Cost:");
console.log(totalCost);


// Print an array with all the drinks that are seasonal.
const seasonalDrinks = coffeeMenu.filter((drink) => drink.seasonal);
console.log(seasonalDrinks);
console.table(seasonalDrinks);

// Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".
const seasonalDrinksWithBeans = seasonalDrinks.map((drink) => `${drink.name} with imported beans`);
console.log(seasonalDrinksWithBeans);

