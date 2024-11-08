// Prompt the user for a list of froyo flavors separated by commas & store their answer
let userInputString = prompt(
    "Please enter a comma-separated list of froyo flavors you would like to order",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );
  console.log(`You ordered: \n${userInputString}`);
  
  // Define & create a function to hold our logic to create an object from our user input
  
  /**
   * Takes a comma-separated string and returns an object of flavors
   * @param {string} froyoOrder
   * @returns {object} an object w/ flavor as key & count of that flavor as value
   */
  
  function getFroyoObj(froyoOrder) {
    // Parse the user input string into an array of froyo flavors
    // String.split(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
    const froyoArray = froyoOrder.split(",");
  
    // Build an object to track flavors from user
    const froyoObj = {};
  
    // Iterate through froyoArray to add flavors and count to object
    for (let i = 0; i < froyoArray.length; i++) {
      // Create a variable to point to our current element
      const currentFlavor = froyoArray[i];
      // If the froyoObj does not have the currentFlavor, add it & add count of 1
      if (!froyoObj[currentFlavor]) {
        froyoObj[currentFlavor] = 1;
      } else {
        // Otherwise, the currentFlavor already exists as a key, so add 1 to count
        froyoObj[currentFlavor] += 1;
      }
    }
  
    // return the final flavors object after iterating through array
    return froyoObj;
  }
  
  // Call/invoke the function and print as a table into the browser console
  console.table(getFroyoObj(userInputString));
  
  // Test out with different inputs
  userInputString = prompt(
    "Let's put in another order: ",
    "vanilla,pistachio,chocolate,strawberry,strawberry,vanilla,pistachio"
  );
  console.log(`You ordered: \n${userInputString}`);
  console.table(getFroyoObj(userInputString));
  
  userInputString = prompt(
    "One last time! ",
    "coffee,coffee,green tea,coffee,coffee,green tea,coffee,coffee"
  );
  console.log(`You ordered: \n${userInputString}`);
  console.table(getFroyoObj(userInputString));