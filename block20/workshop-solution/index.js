/** State **/
// The numbers in the bank, odd category, and even category are stored in state.
const state = {
  numberBank: [],
  odds: [],
  evens: [],
};

/** References **/
// References to selected DOM elements are stored in variables.
const form = document.querySelector('form');
const sortOneButton = document.querySelector('#sortOne');
const sortAllButton = document.querySelector('#sortAll');

const numberBank = document.querySelector('#numberBank output');
const oddsOuput = document.querySelector('#odds output');
const evensOutput = document.querySelector('#evens output');

/** Functions **/
const addNumberToBank = (number) => {
  state.numberBank.push(number);
  render();
};

const sortOne = () => {
  if (state.numberBank.length > 0) {
    // Get first number from number bank (can do .pop() to get last number)
    const num = state.numberBank.shift();
    // The numbers are placed into the correct bucket based on whether they are odd or even.
    if (num % 2 === 0) {
      state.evens.push(num);
    } else {
      state.odds.push(num);
    }
    // With a ternary: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
    // number % 2 === 0 ? state.evens.push(number) : state.odds.push(number);
  }
  render();
};

const sortAll = () => {
  if (state.numberBank.length > 0) {
    state.numberBank.forEach((num) => {
      // The numbers are placed into the correct bucket based on whether they are odd or even.
      if (num % 2 === 0) {
        state.evens.push(num);
      } else {
        state.odds.push(num);
      }
    });
    // Reset numbers state since we sorted all the numbers
    state.numberBank = [];

    // Or, using a while loop + shift:
    // while (state.numberBank.length > 0) {
    //   const number = state.numberBank.shift();
    //   number % 2 === 0 ? state.evens.push(number) : state.odds.push(number);
    // }
  }
  render();
};

/* Render */
// The DOM is accurately rendered to reflect the state
// Render function updates UI when state changes
function render() {
  // The number bank displays all the numbers the user has entered
  numberBank.textContent = state.numberBank.join(', ');
  // The evens bank displays all the numbers in the evens array
  evensOutput.textContent = state.evens.join(', ');
  // The odds bank displays all the numbers in the odds array
  oddsOuput.textContent = state.odds.join(', ');
}

/* Event Listeners */
// The event listeners are listening for appropriate events, such as `submit` and `click`.

// When the user clicks the "Add Number" button, the number they entered into the input field is added to the number bank.
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const num = parseInt(form.elements.number.value);
  // The number bank is not changed if the user enters a non-numeric value.
  if (!isNaN(num)) {
    addNumberToBank(num);
    form.elements.number.value = '';
  }
});

// When the "Sort 1" button is clicked, the first number in the number bank is removed and placed into either the odd or even category.
sortOneButton.addEventListener('click', sortOne);
// When the "Sort All" button is clicked, all the numbers in the number bank are moved into either the odd or even category.
sortAllButton.addEventListener('click', sortAll);

// Initial render
render();
