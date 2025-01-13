/**
 * @typedef Item
 * @property {number} id - this item's ID
 * @property {string} name - name of this item
 * @property {number} price - price of this item
 * @property {string} category - the food group this item belongs to
 * @property {number} quantity - number of this item in inventory
 */

// ------------------ Complete the functions written below ------------------------------ //

/**
 * Prints out the name of each item in the given array.
 * @param {Item[]} items - array of items
 */
function logNames(items) {
  // TODO: use `forEach`
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  items.forEach((currentItem) => {
    console.log(currentItem.name);
  });
}

/**
 * @param {Item[]} items - array of items
 * @returns {string[]} an array of item names in all uppercase
 */
function getUppercaseNames(items) {
  // TODO: use `map`
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  // String.toUpperCase(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
  // Spread syntax (...): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  return items.map((currentItem) => {
    return currentItem.name.toUpperCase();
    // If we wanted to capitalize only the first letter of each name:
    // String.charAt(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
    // String.slice(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
    // return currentItem.name.charAt(0).toUpperCase() + currentItem.name.slice(1);
  });
}

/**
 * @param {Item[]} items - array of items
 * @param {number} id - id of the item to find
 * @returns {Item} - the item in `items` with the given `id`
 */
function getItemById(items, id) {
  // TODO: use `find`
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  return items.find((currentItem) => currentItem.id === id);
}

/**
 * @param {Item[]} items - array of items
 * @param {string} name - name of the item to find
 * @returns {number} the price of the item named `name`
 */
function getItemPriceByName(items, name) {
  // TODO: use a loop!
  const item = items.find(
    (currentItem) => currentItem.name.toLowerCase() === name.toLowerCase() // lowercase both names just in case, before comparing strings
  );
  return item.price;
}

/**
 * @param {Item[]} items - array of items
 * @param {string} category
 * @returns {Item[]} array of items that belong to the given `category`
 */
function getItemsByCategory(items, category) {
  // TODO: use `filter`
  // Array.filter(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  return items.filter((currentItem) => currentItem.category === category);
}

/**
 * @param {Item[]} items - array of items
 * @returns {number} the total quantity of all items
 */
function countItems(items) {
  // TODO: use `reduce`
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  return items.reduce((total, currentItem) => total + currentItem.quantity, 0);
}

/**
 * @param {Item[]} items - array of items
 * @returns {number} the cost of all given items
 */
function calculateTotalPrice(items) {
  // TODO: use `reduce`
  return items.reduce((total, currentItem) => {
    const currItemTotalCost = currentItem.price * currentItem.quantity;
    return total + currItemTotalCost;
  }, 0);
}

// --------------------- DO NOT CHANGE THE CODE BELOW ------------------------ //

/** @type {Item[]} */
const INVENTORY = [
  { id: 1, name: 'apple', price: 1.75, category: 'fruit', quantity: 100 },
  { id: 2, name: 'banana', price: 0.25, category: 'fruit', quantity: 137 },
  { id: 3, name: 'orange', price: 1.0, category: 'fruit', quantity: 10 },
  { id: 4, name: 'broccoli', price: 3.0, category: 'vegetable', quantity: 67 },
  { id: 6, name: 'milk', price: 5.75, category: 'dairy', quantity: 90 },
  { id: 7, name: 'cheddar', price: 4.0, category: 'dairy', quantity: 63 },
  { id: 8, name: 'sourdough', price: 5.5, category: 'grains', quantity: 81 },
];

console.log('Welcome! We carry the following items:');
logNames(INVENTORY);

console.log('Here are the names again in all uppercase:');
console.log(getUppercaseNames(INVENTORY));

console.log(`In total, we have ${countItems(INVENTORY)} items in stock.`);

const totalCost = calculateTotalPrice(INVENTORY);
console.log(
  `It would cost $${totalCost?.toFixed(2)} to purchase everything in stock.`
);

const itemId = prompt('Enter the ID of an item:', '1');
console.log(`The item with id #${itemId} is:`);
console.log(getItemById(INVENTORY, +itemId));

const itemName = prompt('Enter the name of an item:', 'apple');
console.log(
  `The price of ${itemName} is ${getItemPriceByName(INVENTORY, itemName)}.`
);

const category = prompt('Enter a category you would like to see:', 'fruit');
console.log(`The items in the ${category} category are:`);
console.log(getItemsByCategory(INVENTORY, category));
