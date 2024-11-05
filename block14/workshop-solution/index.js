// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  'Please enter some integers separated by commas.',
  '1,2,3,4,5'
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(',');

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}

// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  // Array length property: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
  return numbers.length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    const currentNum = numbers[i];
    sum += currentNum;
  }

  // Using for/of loop (): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

  // for (const num of numbers) {
  //   sum += num;
  // }

  return sum;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  return Math.round(getSum(numbers) / getLength(numbers));
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  // Math.min(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
  return Math.min(...numbers);

  // let min = Infinity;

  // for (const num of numbers) {
  //   if (num < min) {
  //     min = num;
  //   }
  // }

  // return min;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  // Math.max(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  return Math.max(...numbers);

  // let max = -Infinity;

  // for (const num of numbers) {
  //   if (num > max) {
  //     max = num;
  //   }
  // }

  // return max;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  return getMax(numbers) - getMin(numbers);
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  const evens = [];

  for (const num of numbers) {
    // If a number is even (divisible by 2 w/ remainder of 0), add to evens array
    // Modulo/Remainder: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
    if (num % 2 === 0) {
      evens.push(num);
    }
  }

  return evens;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  const odds = [];

  for (const num of numbers) {
    // If a number is odd (remainder of 1 when divided by 2), add to odds array
    // Can also do: `num % 2 !== 0`
    if (num % 2 === 1) {
      odds.push(num);
    }
  }

  return odds;
}
