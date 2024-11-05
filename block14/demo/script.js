// 1. Create an array named `myInstruments` that contains the following instruments: flute, clarinet, saxophone, trumpet, and trombone.
const myInstruments = ['flute', 'clarinet', 'saxophone', 'trumpet', 'trombone'];

// 2. Write code to transform it into ["saxophone", "flute", "clarinet", "trumpet", "trombone", "tuba", "bassoon"].
myInstruments.push('tuba');
myInstruments.push('bassoon');
myInstruments.splice(2, 1);
myInstruments.unshift('saxophone');

// For the following prompts, write a function according to the description.
// Test your code as you write it by calling the function in the browser console.

// 1. getFirstInstruments(instruments: string[]) returns the first instrument.
// Example: getFirstInstrument(myInstruments) >>> "saxophone"

/**
 * @param {string[]} instruments an array of instruments
 * @returns {string} the first instrument
 */
function getFirstInstrument(instruments) {
  return instruments[0];
}

// 2. getLastInstrument(instruments: string[]) returns the last instrument.
// Example: getLastInstrument(myInstruments) >>> "bassoon"

/**
 * @param {string[]} instruments an array of instruments
 * @returns {string} the last instrument
 */
function getLastInstrument(instruments) {
  return instruments[instruments.length - 1];
}

// 3. getFirstAndLastInstruments(instruments: string[]) returns a new array containing the first and last instruments without modifying the original array.
// Example: getFirstAndLastInstruments(myInstruments) >>> ["saxophone", "bassoon"]

/**
 * @param {string[]} instruments an array of instruments
 * @returns {string[]} the first and last instruments
 */
function getFirstAndLastInstruments(instruments) {
  const output = [];
  output.push(instruments[0]);
  output.push(instruments[instruments.length - 1]);
  return output;

  // Some other ways to do this:
  // return [instruments[0], instruments[instruments.length - 1]];
  // OR
  // return [instruments[0], instruments.at(-1)];
  // OR
  // return [getFirstInstrument(instruments), getLastInstrument(instruments)];
}

// 4. getFirstThreeInstruments(instruments: string[]) returns the first three instruments without modifying the original array.
// Example: getFirstThreeInstruments(myInstruments) >>> ["saxophone", "flute", "clarinet"]
// Hint: Use a loop to push items into a new array.

/**
 * @param {string[]} instruments an array of instruments
 * @returns {string[]} the first three instruments
 */
function getFirstThreeInstruments(instruments) {
  const output = [];
  output.push(instruments[0]);
  output.push(instruments[1]);
  output.push(instruments[2]);
  return output;

  // Can you think of other ways to do this?
}

// Here's one way to do it with a loop:
function getFirstThreeInstrumentsWithLoop(instruments) {
  const output = [];
  for (let i = 0; i < 3; i++) {
    output.push(instruments[i]);
  }
  return output;
}

// 5. getTInstruments(instruments: string[]) returns all instruments that start with the letter "t" without modifying the original array.
// Example: getTInstruments(myInstruments) >>> ["trumpet", "trombone", "tuba"]
// Hint: As you are iterating through the array, what do you need to check for before adding to the output array?

/**
 * @param {string[]} instruments an array of instruments
 * @returns {string[]} all instruments that start with "t"
 */
function getTInstruments(instruments) {
  const output = [];
  for (let i = 0; i < instruments.length; i++) {
    const instrument = instruments[i];
    // Remember we can also use string indexes!
    if (instrument[0] === 't') {
      output.push(instrument);
    }
  }
  return output;
}

// 6. (Challenge) getLongestNamedInstrument(instruments: string[]) returns the instrument with the longest name.
// Example: getLongestNamedInstrument(myInstruments) >>> "saxophone"
// Hint: Keep track of the instrument with the longest name you have seen so far as you iterate through the array. When should that information be updated?

/**
 * @param {string[]} instruments an array of instruments
 * @returns {string} the instrument with the longest name
 */
function getLongestNamedInstrument(instruments) {
  let longestInstrument = '';
  // Here we use a for..of loop as syntactic sugar for the index loop
  for (const instrument of instruments) {
    if (instrument.length > longestInstrument.length) {
      longestInstrument = instrument;
    }
  }
  return longestInstrument;
}
