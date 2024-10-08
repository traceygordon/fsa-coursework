// Algorithm to find the secret vault code

//To solve this problem, you need to calculate the vault codes by using math arithmitecs and store them in variables. Then you need to display the welcome message to the safe cracker with the secret combination (10 - 40 - 39)

// 1. Create a string for the user
const string = `You have received this message because you have been chosen to open an important vault. Here is the secret combination: `;

// 2. Calculate the factor for the first vault number 10
const firstNum = 2 * 5;

// 3. Calculate the difference for the second vault number 40
const secondNum = 60 - 20;

// 4. Calculate the sum for the third vault number 39
const thirdNum = 20 + 19;

// 4. Display the welcome message to the safe cracker
const message = string + `\n ${firstNum} - ${secondNum} - ${thirdNum}`;

//5. Alert the user with the welcome message and the secret combination
alert(message);
